const express = require('express');
const router = express.Router();

// Dummy data for roles and agencies
let roles = [];
let agencies = [];

// Create a new role
router.post('/roles', (req, res) => {
    const role = req.body;
    roles.push(role);
    res.status(201).send(role);
});

// Get all roles
router.get('/roles', (req, res) => {
    res.send(roles);
});

// Create a new agency
router.post('/agencies', (req, res) => {
    const agency = req.body;
    agencies.push(agency);
    res.status(201).send(agency);
});

// Get all agencies
router.get('/agencies', (req, res) => {
    res.send(agencies);
});

module.exports = router;