// appointmentController.js
const Appointment = require('../models/Appointment');

// Controller methods
const getAllAppointments = async (req, res, next) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    next(error);
  }
};

const getAppointmentById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const appointment = await Appointment.findById(id);
    res.json(appointment);
  } catch (error) {
    next(error);
  }
};

const createAppointment = async (req, res, next) => {
  const { patientId, dentistId, date,category,notes } = req.body;
  try {
    const newAppointment = await Appointment.create({ patientId, dentistId, date,category,notes});
    res.status(201).json(newAppointment);
  } catch (error) {
    next(error);
  }
};

const updateAppointment = async (req, res, next) => {
  const { id } = req.params;
  const { patientId, dentistId, date,category,notes } = req.body;
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(id, { patientId, dentistId, date,category,notes }, { new: true });
    res.json(updatedAppointment);
  } catch (error) {
    next(error);
  }
};

const deleteAppointment = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Appointment.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment,
};
