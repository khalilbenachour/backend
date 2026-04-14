const express = require('express');
const router = express.Router();

// Sample route handlers
// Get all lignes
router.get('/', (req, res) => {
    res.send('Retrieve all lignes');
});

// Create a new ligne
router.post('/', (req, res) => {
    res.send('Create a new ligne');
});

// Get a ligne by ID
router.get('/:id', (req, res) => {
    res.send(`Retrieve ligne with ID: ${req.params.id}`);
});

// Update a ligne by ID
router.put('/:id', (req, res) => {
    res.send(`Update ligne with ID: ${req.params.id}`);
});

// Delete a ligne by ID
router.delete('/:id', (req, res) => {
    res.send(`Delete ligne with ID: ${req.params.id}`);
});

module.exports = router;