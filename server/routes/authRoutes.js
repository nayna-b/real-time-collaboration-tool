const express = require('express');
const { loginUser, registerUser, getUserProfile, getAllUsers } = require('../controllers/Controller'); // Ensure correct import
const authMiddleware = require('../middlewares/authMiddleware'); // Import authMiddleware if needed

const router = express.Router();

// Route for user login (POST)
router.post('/login', loginUser);

// Route for user registration (POST)
router.post('/register', registerUser);

// Protected route for user profile (GET)
router.get('/me', authMiddleware, getUserProfile);


// Route to get all users (GET)
router.get('/users', getAllUsers);

module.exports = router;
