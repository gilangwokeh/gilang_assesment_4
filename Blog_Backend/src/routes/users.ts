import express,{ Response ,Request } from 'express'
const router = require('express').Router();
import { userRegister , userLogin , serializeUser}  from '../utils/auth'
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


module.exports = router

