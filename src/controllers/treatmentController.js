// treatmentController.js
const Treatment = require('../models/Treatment');

// Controller methods
const getAllTreatments = async (req, res, next) => {
  try {
    const treatments = await Treatment.find();
    res.json(treatments);
  } catch (error) {
    next(error);
  }
};

const getTreatmentById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const treatment = await Treatment.findById(id);
    res.json(treatment);
  } catch (error) {
    next(error);
  }
};

const createTreatment = async (req, res, next) => {
  const { name, description, cost, procedure, recoveryTime } = req.body;
  try {
    const newTreatment = await Treatment.create({ name, description, cost, procedure, recoveryTime });
    res.status(201).json(newTreatment);
  } catch (error) {
    next(error);
  }
};

const updateTreatment = async (req, res, next) => {
  const { id } = req.params;
  const { name, description, cost, procedure, recoveryTime } = req.body;
  try {
    const updatedTreatment = await Treatment.findByIdAndUpdate(id, { name, description, cost, procedure, recoveryTime }, { new: true });
    res.json(updatedTreatment);
  } catch (error) {
    next(error);
  }
};

const deleteTreatment = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Treatment.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTreatments,
  getTreatmentById,
  createTreatment,
  updateTreatment,
  deleteTreatment,
};
