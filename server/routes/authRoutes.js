const express = require('express');
const { loginUser, registerUser } = require('../controllers/Controller'); // Ensure correct import
const authMiddleware = require('../middlewares/authMiddleware'); // Import authMiddleware if needed

const router = express.Router();

// Route for user login (POST)
router.post('/login', loginUser);

// Route for user registration (POST)
router.post('/register', registerUser);

// If you have any GET routes, ensure you're passing the correct handler
// For example, a protected route might look like:
router.get('/me', authMiddleware, (req, res) => {
  res.json({ message: 'User profile accessed successfully' });
});

module.exports = router;
