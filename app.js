// app.js
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import connectDB from './config/mongoose.config.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import adRoutes from './routes/adRoutes.js';
import houseRoutes from './routes/houseRoutes.js';
import landRoutes from './routes/landRoutes.js';
import phoneValidRoutes from './routes/phoneValidRoutes.js';
import { initiateTwilio } from "./utils/phoneVerUtil.js"
// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB()
// Initialize Express app
const app = express();
app.use(cookieParser())
// Middleware
app.use(morgan('dev')); // Logging HTTP requests
app.use(helmet()); // Security headers
app.use(cors()); // Cross-Origin Resource Sharing
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(bodyParser.json()); // Parse JSON bodies
initiateTwilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);


// Routes
app.use('/api/users', userRoutes);
app.use('/api/ads', adRoutes);
app.use('/api/twilio', phoneValidRoutes);
app.use('/api/houses', houseRoutes);
app.use('/api/lands', landRoutes);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
