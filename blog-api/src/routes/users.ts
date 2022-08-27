import express,{ Response ,Request } from 'express'
const router = require('express').Router();
import { userRegister , userLogin , serializeUser}  from '../utils/auth'
import Users from "../models/User"
//Users Registeration Route
router.post("/register-user", async (req : Request, res : Response) => {
  await res.set('Access-Control-Allow-Origin', '*');
  await userRegister(req.body, 'user', res);
})

//admin Registration Router 
router.post("/register-admin", async (req : Request, res : Response) => {
  await res.set('Access-Control-Allow-Origin', '*');
  await userRegister(req.body, 'admin', res);
})

//Users Login Route

router.post("/login-user", async (req : Request, res : Response) => {
  await res.set('Access-Control-Allow-Origin', '*');
  await userLogin(req.body, "user", res);
})

//admin  Login Router 
router.post("/login-admin", async (req : Request, res : Response) => {
  await res.set('Access-Control-Allow-Origin', '*');
  await userLogin(req.body, "admin", res);
})
router.get("/array", async (req : Request ,res : Response) => {
  res.send("hello word")
})

module.exports = router

