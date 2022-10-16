import express from "express";
import { getUser, register } from "../controller/userController";
const router = express.Router();


router.post("/register",register);
router.get("/user",getUser);




export default router;
