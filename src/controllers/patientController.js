// patientController.js
const Patient = require('../models/Patient');

// Controller methods
exports.getAllPatients = async (req, res, next) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    next(error);
  }
};

exports.getPatientById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const patient = await Patient.findById(id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.json(patient);
  } catch (error) {
    next(error);
  }
};

exports.createPatient = async (req, res, next) => {
  const { name, age, gender,email,phone,address,insurance } = req.body;
  try {
    const newPatient = await Patient.create({ name, age, gender,email,phone,address,insurance });
    res.status(201).json(newPatient);
  } catch (error) {
    next(error);
  }
};

exports.updatePatient = async (req, res, next) => {
  const { id } = req.params;
  const { name, age, gender,email,phone,address,insurance } = req.body;
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(
      id,
      { name, age, gender,email,phone,address,insurance },
      { new: true }
    );
    if (!updatedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.json(updatedPatient);
  } catch (error) {
    next(error);
  }
};

exports.deletePatient = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedPatient = await Patient.findByIdAndDelete(id);
    if (!deletedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.json(deletedPatient);
  } catch (error) {
    next(error);
  }
};
