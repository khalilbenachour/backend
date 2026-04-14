const express = require('express');
const router = express.Router();
const appareilsController = require('./appareils.controller');

// Get all devices
router.get('/', appareilsController.getAllDevices);

// Get device by ID
router.get('/:id', appareilsController.getDeviceById);

// Create device
router.post('/', appareilsController.createDevice);

// Update device
router.put('/:id', appareilsController.updateDevice);

// Delete device by ID
router.delete('/:id', appareilsController.deleteDeviceById);

module.exports = router;