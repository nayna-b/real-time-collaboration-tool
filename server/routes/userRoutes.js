// server/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware'); // Import middleware
const User = require('../models/User'); // User model

// Protected route to get user profile
router.get('/me', authMiddleware, async (req, res) => {
  try {
    // Assuming user information is decoded into req.user
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.status(200).json({
      message: 'User profile accessed successfully',
      user: { id: user._id, name: user.name, role: user.role },
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
