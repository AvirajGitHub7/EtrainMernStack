import express from "express"
import { addTrain } from "../controller/addtraincontroller.js"
import {isAdmin} from "../middleware/adminmiddleware.js"

const router=express.Router();
router.post("/addtrain",isAdmin,addTrain);
export default router