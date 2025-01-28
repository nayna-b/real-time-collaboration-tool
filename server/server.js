const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Import connectDB
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

// Load environment variables
dotenv.config();

// Log MONGO_URI for debugging
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('JWT_SECRET:', process.env.JWT_SECRET);

const app = express(); // Initialize the app object
const MONGO_URI = process.env.MONGO_URI; // Use connection string from .env

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to the Real-Time Collaboration Tool!');
});

// Connect to MongoDB and Start the Server
connectDB(); // Call the database connection function

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
