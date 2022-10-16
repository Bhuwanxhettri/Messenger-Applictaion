import express from 'express';
import { newConverstation } from '../controller/conversationController';
const router = express.Router();


router.post("/conversation/add",newConverstation);



export default router;