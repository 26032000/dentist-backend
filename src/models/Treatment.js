// Treatment.js
const mongoose = require('mongoose');

const treatmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  procedure: {
    type: String,
    required: true
  },
  recoveryTime: {
    type: String,
    required: true
  }
});

const Treatment = mongoose.model('Treatment', treatmentSchema);

module.exports = Treatment;
