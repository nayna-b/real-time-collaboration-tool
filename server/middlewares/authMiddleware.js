const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ message: 'No token found. Please log in.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // decoded contains the user ID as set in the login function
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token.' });
  }
};

module.exports = authMiddleware;
