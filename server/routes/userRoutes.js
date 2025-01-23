const express = require('express');
const router = express.Router();

// Example route: GET /api/users
router.get('/', (req, res) => {
  res.json([
    { name: 'Alice' },
    { name: 'Bob' },
    { name: 'Charlie' }
  ]); // Return an array of user objects
});

module.exports = router;