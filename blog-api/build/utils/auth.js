"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeUser = exports.userLogin = exports.userRegister = void 0;
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User_1 = __importDefault(require("../models/User"));
const config_1 = __importDefault(require("../config"));
const userRegister = (userDets, role, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //Validate the username
        let usernameNotTaken = yield (ValidateUsername(userDets.username));
        if (!usernameNotTaken) {
            return res.status(400).json({
                message: "username is already taken,",
                success: false
            });
        }
        let emailNotRegistered = yield (ValidateEmail(userDets.email));
        if (!emailNotRegistered) {
            return res.status(400).json({
                message: "email is not already registered.",
                success: false
            });
        }
        const password = yield bcrypt.hash(userDets.password, 12);
        //create a new user
        const newUser = new User_1.default(Object.assign(Object.assign({}, userDets), { password,
            role }));
        yield newUser.save();
        return res.status(201).json({
            message: "horre! now you are successfully resgistred. Please nor login.",
            success: true
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "unable to create your account",
            success: false
        });
    }
});
exports.userRegister = userRegister;
const userLogin = (userCreds, role, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { username, password } = userCreds;
    const user = yield User_1.default.findOne({ username });
    if (!user) {
        return res.status(404).json({
            message: "Pengguna Tidak di Temukan",
            success: false
        });
    }
    //we will check the role
    if (user.role !== role) {
        return res.status(403).json({
            message: "please make sure you are logging in from the right portal",
            success: false
        });
    }
    let isMatch = yield bcrypt.compare(password, user.password);
    if (isMatch) {
        let token = jwt.sign({
            user_id: user.id,
            role: user.role,
            username: user.username,
            email: user.email
        }, config_1.default.SECRET, { expiresIn: "1h" });
        let result = {
            username: user.username,
            role: user.role,
            email: user.email,
            token: `Bearer ${token}`,
            expiresIn: "1h"
        };
        return res.status(200).json(Object.assign(Object.assign({}, result), { message: "horre! you are now logging.", success: true }));
    }
    else {
        return res.status(403).json({
            message: "Incorret password.",
            success: false
        });
    }
});
exports.userLogin = userLogin;
// const userAuth = passport.authenticate('jwt', { session: false });
// const checkRole = roles => (res, req,next)=>{
//   if(roles.includes(req.user.role)){
//    return next();
//   }else{
//     return res.status(401).json({
//       message: "Unauthorized.",
//       success: false
//     })
//   }
// }
const ValidateUsername = (username) => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield User_1.default.findOne({ username });
    return user ? false : true;
});
const ValidateEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield User_1.default.findOne({ email });
    return user ? false : true;
});
const serializeUser = (user) => {
    return {
        username: user.username,
        email: user.email,
        name: user.name,
        _id: user._id,
        updatedAd: user.updatedAd,
        createdAd: user.createdAd
    };
};
exports.serializeUser = serializeUser;
