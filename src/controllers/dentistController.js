// dentistController.js
const Dentist = require('../models/Dentist');

// Controller methods
exports.getAllDentists = async (req, res, next) => {
  try {
    const dentists = await Dentist.find();
    res.json(dentists);
  } catch (error) {
    next(error);
  }
};

exports.getDentistById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const dentist = await Dentist.findById(id);
    if (!dentist) {
      return res.status(404).json({ message: 'Dentist not found' });
    }
    res.json(dentist);
  } catch (error) {
    next(error);
  }
};

exports.createDentist = async (req, res, next) => {
  const { name, speciality } = req.body;
  try {
    const newDentist = await Dentist.create({ name, speciality });
    res.status(201).json(newDentist);
  } catch (error) {
    next(error);
  }
};

exports.updateDentist = async (req, res, next) => {
  const { id } = req.params;
  const { name, speciality } = req.body;
  try {
    const updatedDentist = await Dentist.findByIdAndUpdate(
      id,
      { name, speciality },
      { new: true }
    );
    if (!updatedDentist) {
      return res.status(404).json({ message: 'Dentist not found' });
    }
    res.json(updatedDentist);
  } catch (error) {
    next(error);
  }
};

exports.deleteDentist = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedDentist = await Dentist.findByIdAndDelete(id);
    if (!deletedDentist) {
      return res.status(404).json({ message: 'Dentist not found' });
    }
    res.json(deletedDentist);
  } catch (error) {
    next(error);
  }
};
