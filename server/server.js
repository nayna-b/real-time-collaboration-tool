const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Log MONGO_URI for debugging
console.log('MONGO_URI:', process.env.MONGO_URI);



const app = express();
const MONGO_URI = process.env.MONGO_URI; // Use connection string from .env

// Middleware
app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to the Real-Time Collaboration Tool!');
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => console.log('Server is running on port 5000'));
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
