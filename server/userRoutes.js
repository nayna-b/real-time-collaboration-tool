const express = require('express');
const router = express.Router();

// Sample route to get all users
router.get('/', (req, res) => {
  res.send('Get all users');
});

// Sample route to create a new user
router.post('/', (req, res) => {
  res.send('Create a new user');
});

module.exports = router;
