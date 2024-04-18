// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middleware/authenticateToken');
const { resetPassword } = require('../controllers/resetpasswordController');


// Register a new user
router.post('/register', userController.registerUser);

// Login user
router.post('/login', userController.loginUser);
router.post('/reset-password', resetPassword);
router.post('/logout', userController.logout);
router.get('/profile', authenticateToken, (req, res) => {
  res.json(req.user);
});
module.exports = router;
