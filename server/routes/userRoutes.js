const express = require('express');
const router = express.Router();

// Example route: GET /api/users
router.get('/', (req, res) => {
  res.json([
    { name: 'Nayna' },
    { name: 'Bob' },
    { name: 'Charlie' }
  ]); // Return an array of user objects
});

module.exports = router;