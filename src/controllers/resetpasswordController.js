const bcrypt = require('bcrypt');
const User = require('../models/User'); // Assuming you have a User model
const { validationResult } = require('express-validator');

const resetPassword = async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Extract email and new password from request body
  const { email, newPassword } = req.body;

  try {
    // Find user by email
    let user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update user's password with the new hashed password
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    console.error('Password reset error:', error.message);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { resetPassword };
