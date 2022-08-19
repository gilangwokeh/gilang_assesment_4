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
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const auth_1 = require("../utils/auth");
//Users Registeration Route
router.post("/register-user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield res.set('Access-Control-Allow-Origin', '*');
    yield (0, auth_1.userRegister)(req.body, 'user', res);
}));
//admin Registration Router 
router.post("/register-admin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield res.set('Access-Control-Allow-Origin', '*');
    yield (0, auth_1.userRegister)(req.body, 'admin', res);
}));
//Users Login Route
router.post("/login-user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield res.set('Access-Control-Allow-Origin', '*');
    yield (0, auth_1.userLogin)(req.body, "user", res);
}));
//admin  Login Router 
router.post("/login-admin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield res.set('Access-Control-Allow-Origin', '*');
    yield (0, auth_1.userLogin)(req.body, "admin", res);
}));
// //profille route
// router.get("/profile", userAuth, async (req : Request, res : Response) => {
//   await res.set('Access-Control-Allow-Origin', '*');
//   return res.json(serializeUser(req.user))
// })
// //Users Proctected Route
// router.get("/user-protect", userAuth, async (req : Request, res : Response) => { 
//   await res.set('Access-Control-Allow-Origin', '*');
//   return res.json("hello user")
// })
// //admin  Proctected Router 
// router.get("/admin-protect", userAuth, async (req : Request, res : Response) => { 
//   await res.set('Access-Control-Allow-Origin', '*');
//   return res.json("hello admin")
// })
module.exports = router;
