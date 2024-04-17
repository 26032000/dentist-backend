// faqController.js
const FAQ = require('../models/FAQ');

// Controller methods
const getAllFAQs = async (req, res, next) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (error) {
    next(error);
  }
};

const getFAQById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const faq = await FAQ.findById(id);
    res.json(faq);
  } catch (error) {
    next(error);
  }
};

const createFAQ = async (req, res, next) => {
  const { title, question, answer } = req.body;
  try {
    const newFAQ = await FAQ.create({ title, question, answer });
    res.status(201).json(newFAQ);
  } catch (error) {
    next(error);
  }
};

const updateFAQ = async (req, res, next) => {
  const { id } = req.params;
  const { title, question, answer } = req.body;
  try {
    const updatedFAQ = await FAQ.findByIdAndUpdate(id, { title, question, answer }, { new: true });
    res.json(updatedFAQ);
  } catch (error) {
    next(error);
  }
};

const deleteFAQ = async (req, res, next) => {
  const { id } = req.params;
  try {
    await FAQ.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllFAQs,
  getFAQById,
  createFAQ,
  updateFAQ,
  deleteFAQ,
};
