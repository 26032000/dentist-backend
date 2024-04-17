// Appointment.js
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  dentistId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dentist',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  category:{
    type: String,
    required: true
  },
  notes:{
    type: String,
    required: false
  }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
