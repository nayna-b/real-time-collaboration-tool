const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error registering user' });
  }
};

const loginUser = async (req, res) => {
  
  console.log('JWT_SECRET:', process.env.JWT_SECRET); // Log the JWT_SECRET for debugging
  const { email, password } = req.body;
  console.log('Login attempt with email:', email);  // Log incoming request
  
  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found');
      return res.status(404).json({ error: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Invalid credentials');
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    res.json({ token, user: { id: user._id, name: user.name, role: user.role } });
  } catch (error) {
    console.error('Error during login:', error);  // Log error details
    res.status(500).json({ error: 'Server error' });
  }
};

const getUserProfile = (req, res) => {
  res.json({
    message: 'User profile accessed successfully',
    user: req.user, // The user data will be in req.user after authMiddleware verification
  });
};

module.exports = { registerUser, loginUser, getUserProfile };


module.exports = { registerUser, loginUser };
