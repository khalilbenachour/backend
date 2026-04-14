const express = require('express');
const router = express.Router();

// Mock data for recipes
let recettes = [
    { id: 1, title: 'Recette 1', description: 'Description for recette 1' },
    { id: 2, title: 'Recette 2', description: 'Description for recette 2' },
];

// Get all recettes
router.get('/', (req, res) => {
    res.json(recettes);
});

// Get a recette by id
router.get('/:id', (req, res) => {
    const recette = recettes.find(r => r.id === parseInt(req.params.id));
    if (!recette) return res.status(404).send('Recette not found');
    res.json(recette);
});

// Create a new recette
router.post('/', (req, res) => {
    const { title, description } = req.body;
    const newRecette = {
        id: recettes.length + 1,
        title,
        description,
    };
    recettes.push(newRecette);
    res.status(201).json(newRecette);
});

// Update a recette
router.put('/:id', (req, res) => {
    const recette = recettes.find(r => r.id === parseInt(req.params.id));
    if (!recette) return res.status(404).send('Recette not found');

    const { title, description } = req.body;
    recette.title = title;
    recette.description = description;
    res.json(recette);
});

// Delete a recette
router.delete('/:id', (req, res) => {
    const recetteIndex = recettes.findIndex(r => r.id === parseInt(req.params.id));
    if (recetteIndex === -1) return res.status(404).send('Recette not found');

    recettes.splice(recetteIndex, 1);
    res.status(204).send();
});

module.exports = router;