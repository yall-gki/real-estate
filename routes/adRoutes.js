// routes/userRoutes.js
import express from 'express';
import authenticate from '../middleware/authMiddleware.js';
import { createAd, getHouses, getLands } from '../controllers/adController.js';

const router = express.Router();

router.post('/create',authenticate, createAd);


export default router;
