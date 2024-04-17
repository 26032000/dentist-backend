// inventoryRoutes.js
const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');
const authenticateToken = require('../middleware/authenticateToken');

// Routes for Inventory
router.get('/', inventoryController.getAllInventoryItems);
router.get('/:id', inventoryController.getInventoryItemById);
router.post('/', authenticateToken,inventoryController.createInventoryItem);
router.put('/:id',authenticateToken, inventoryController.updateInventoryItem);
router.delete('/:id',authenticateToken, inventoryController.deleteInventoryItem);

module.exports = router;
