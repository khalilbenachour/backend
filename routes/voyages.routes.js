const express = require('express');
const router = express.Router();

// Example voyage data (in-memory storage)
let voyages = [];

// Route to get all voyages
router.get('/', (req, res) => {
    res.json(voyages);
});

// Route to create a new voyage
router.post('/', (req, res) => {
    const newVoyage = req.body;
    voyages.push(newVoyage);
    res.status(201).json(newVoyage);
});

// Route to update a voyage by id
router.put('/:id', (req, res) => {
    const voyageId = req.params.id;
    const updatedVoyage = req.body;
    voyages[voyageId] = updatedVoyage;
    res.json(updatedVoyage);
});

// Route to delete a voyage by id
router.delete('/:id', (req, res) => {
    const voyageId = req.params.id;
    voyages.splice(voyageId, 1);
    res.status(204).send();
});

module.exports = router;