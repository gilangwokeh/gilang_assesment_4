const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/User");
const { SECRET } = require("../config/index");


const userRegister = async (userDets, role, res) => {
  try {
    //Validate the username
    let usernameNotTaken = await (ValidateUsername(userDets.username))
    if (!usernameNotTaken) {
      return res.status(400).json({
        message: "username is already taken,",
        success: false
      })
    }
    let emailNotRegistered = await (ValidateEmail(userDets.email))
    if (!emailNotRegistered) {
      return res.status(400).json({
        message: "email is not already registered.",
        success: false
      })
    }
    const password = await bcrypt.hash(userDets.password, 12);
    //create a new user
    const newUser = new User({
      ...userDets,
      password,
      role
    })
    await newUser.save();
    return res.status(201).json({
      message: "horre! now you are successfully resgistred. Please nor login.",
      success: true
    })
  } catch (error) {
    return res.status(500).json({
      message: "unable to create your account",
      success: false
    })
  }
}

const userLogin = async (userCreds, role, res) => {
  let { username, password } = userCreds;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).json({
      message: "username is not found.invalid login credentials",
      success: false
    })
  }
  //we will check the role
  if (user.role !== role) {
    return res.status(403).json({
      message: "please make sure you are logging in from the right portal",
      success: false
    })
  }
  let isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    let token = jwt.sign(
      {
        user_id: user.id,
        role: user.role,
        username: user.username,
        email: user.email
      }, SECRET, { expiresIn: "1h" });
    let result = {
      username: user.username,
      role: user.role,
      email: user.email,
      token: `Bearer ${token}`,
      expiresIn: "1h"
    }
    return res.status(200).json({
      ...result,
      message: "horre! you are now logging.",
      success: true
    })
  } else {
    return res.status(403).json({
      message: "Incorret password.",
      success: false
    })
  }
}
const userAuth = passport.authenticate('jwt', { session: false });
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

const ValidateUsername = async username => {
  let user = await User.findOne({ username })
  return user ? false : true
}
const ValidateEmail = async email => {
  let user = await User.findOne({ email })
  return user ? false : true
}

const serializeUser = user => {
  return {
    username: user.username,
    email: user.email,
    name: user.name,
    _id: user._id,
    updatedAd: user.updatedAd,
    createdAd: user.createdAd
  };
};
module.exports = {
  userAuth,
  userRegister,
  userLogin,
  serializeUser,
}