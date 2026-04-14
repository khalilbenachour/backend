'use strict';

const express = require('express');
const router = express.Router();

// Import route files
const usersRoutes = require('./users');
const productsRoutes = require('./products');
const ordersRoutes = require('./orders');

// Use routes
router.use('/users', usersRoutes);
router.use('/products', productsRoutes);
router.use('/orders', ordersRoutes);

module.exports = router;
