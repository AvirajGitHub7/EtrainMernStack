import { signup,login } from "../controller/usercontroller.js";
import express from "express"

const router=express.Router();
router.post("/register",signup);
router.post("/login",login);

export default router;