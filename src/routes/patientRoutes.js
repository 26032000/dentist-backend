const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const authenticateToken = require('../middleware/authenticateToken');

// Routes for Patients
router.get('/', patientController.getAllPatients);
router.get('/:id', patientController.getPatientById);
router.post('/',authenticateToken, patientController.createPatient);
router.put('/:id',authenticateToken, patientController.updatePatient);
router.delete('/:id',authenticateToken, patientController.deletePatient);

module.exports = router;
