// routes/userRoutes.js
import express from 'express';
import { checkUser, verifyUser } from '../controllers/phoneVerification.js';

const router = express.Router();

router.post("/validate",verifyUser)
router.post("/validate/check",checkUser)


export default router;
