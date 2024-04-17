
const Inventory = require('../models/Inventory');

// Controller methods
const getAllInventoryItems = async (req, res, next) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (error) {
    next(error);
  }
};

const getInventoryItemById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const inventoryItem = await Inventory.findById(id);
    res.json(inventoryItem);
  } catch (error) {
    next(error);
  }
};

const createInventoryItem = async (req, res, next) => {
  const { name, description, quantity, unitPrice } = req.body;
  try {
    const newInventoryItem = await Inventory.create({ name, description, quantity, unitPrice });
    res.status(201).json(newInventoryItem);
  } catch (error) {
    next(error);
  }
};

const updateInventoryItem = async (req, res, next) => {
  const { id } = req.params;
  const { name, description, quantity, unitPrice } = req.body;
  try {
    const updatedInventoryItem = await Inventory.findByIdAndUpdate(id, { name, description, quantity, unitPrice }, { new: true });
    res.json(updatedInventoryItem);
  } catch (error) {
    next(error);
  }
};

const deleteInventoryItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Inventory.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllInventoryItems,
  getInventoryItemById,
  createInventoryItem,
  updateInventoryItem,
  deleteInventoryItem,
};
