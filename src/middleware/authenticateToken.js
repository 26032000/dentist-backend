// authenticateToken.js
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing' }); // Unauthorized
  }

  jwt.verify(token, process.env.tokenSecret, (err, user) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Token has expired' }); // Unauthorized
      } else {
        return res.status(403).json({ message: 'Invalid token' }); // Forbidden
      }
    }
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
