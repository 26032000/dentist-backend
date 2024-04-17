const express = require('express');
const router = express.Router();
const dentistController = require('../controllers/dentistController');
const authenticateToken = require('../middleware/authenticateToken');

// Routes for Dentists
router.get('/', dentistController.getAllDentists);
router.get('/:id', dentistController.getDentistById);
router.post('/',authenticateToken,  dentistController.createDentist);
router.put('/:id',authenticateToken,  dentistController.updateDentist);
router.delete('/:id',authenticateToken,  dentistController.deleteDentist);

module.exports = router;
