// Authentication routes

const express = require('express');
const router = express.Router();

// Import your authentication controller (these are just placeholders)
const authController = require('../controllers/auth.controller');

// Login route
router.post('/login', authController.login);

// Signup route
router.post('/signup', authController.signup);

// Logout route
router.post('/logout', authController.logout);

module.exports = router;