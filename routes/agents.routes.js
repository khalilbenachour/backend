// agents.routes.js

const express = require('express');
const router = express.Router();

// Sample agents routes

// Get all agents
router.get('/agents', (req, res) => {
    res.send('List of agents');
});

// Get agent by ID
router.get('/agents/:id', (req, res) => {
    const agentId = req.params.id;
    res.send(`Details of agent with ID: ${agentId}`);
});

// Create a new agent
router.post('/agents', (req, res) => {
    const newAgent = req.body;
    res.status(201).send(`Agent created: ${JSON.stringify(newAgent)}`);
});

// Update an existing agent
router.put('/agents/:id', (req, res) => {
    const agentId = req.params.id;
    const updatedAgent = req.body;
    res.send(`Agent with ID: ${agentId} updated with data: ${JSON.stringify(updatedAgent)}`);
});

// Delete an agent
router.delete('/agents/:id', (req, res) => {
    const agentId = req.params.id;
    res.send(`Agent with ID: ${agentId} deleted`);
});

module.exports = router;