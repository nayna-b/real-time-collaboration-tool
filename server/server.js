const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

// Load environment variables
dotenv.config();

// Log MONGO_URI for debugging
console.log('MONGO_URI:', process.env.MONGO_URI);

const app = express(); // Initialize the app object
const MONGO_URI = process.env.MONGO_URI; // Use connection string from .env

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes); // Define your routes AFTER initializing app

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to the Real-Time Collaboration Tool!');
});

// MongoDB Connection
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }) // Ensure proper MongoDB connection options
  .then(() => {
    app.listen(5000, () => console.log('Server is running on port 5000'));
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
