// routes/userRoutes.js
import express from 'express';
import authenticate from '../middleware/authMiddleware.js';
import { createAd, getHouses, getLands } from '../controllers/adController.js';
import { search } from '../controllers/searchController.js';

const router = express.Router();
router.get('/all' , getHouses)
router.get("/search",search)


export default router;
