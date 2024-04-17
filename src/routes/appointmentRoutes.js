const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
const authenticateToken = require('../middleware/authenticateToken');


// Routes for Appointments
router.get('/', appointmentController.getAllAppointments);
router.get('/:id', appointmentController.getAppointmentById);
router.post('/',authenticateToken,  appointmentController.createAppointment);
router.put('/:id',authenticateToken,  appointmentController.updateAppointment);
router.delete('/:id',authenticateToken,  appointmentController.deleteAppointment);

module.exports = router;
