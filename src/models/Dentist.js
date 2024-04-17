// Dentist.js
const mongoose = require('mongoose');

const dentistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  speciality: {
    type: String,
    required: true
  }
});

const Dentist = mongoose.model('Dentist', dentistSchema);

module.exports = Dentist;
