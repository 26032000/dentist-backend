// userController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.token, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    next(error);
  }
};
const logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      return res.status(500).json({ message: 'Logout failed' });
    }
  });

  res.status(200).json({ message: 'Logged out successfully' });
};

module.exports = {
  registerUser,
  loginUser,
  logout,
};
