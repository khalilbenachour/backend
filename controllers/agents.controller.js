const agentsService = require('../services/agentsService');

exports.createAgent = async (req, res) => {
    try {
        const agentData = req.body; // assuming agent data is in body
        const newAgent = await agentsService.createAgent(agentData);
        res.status(201).json(newAgent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllAgents = async (req, res) => {
    try {
        const agents = await agentsService.getAllAgents();
        res.status(200).json(agents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAgentById = async (req, res) => {
    try {
        const agentId = req.params.id;
        const agent = await agentsService.getAgentById(agentId);
        if (!agent) {
            return res.status(404).json({ message: 'Agent not found' });
        }
        res.status(200).json(agent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateAgent = async (req, res) => {
    try {
        const agentId = req.params.id;
        const agentData = req.body;
        const updatedAgent = await agentsService.updateAgent(agentId, agentData);
        if (!updatedAgent) {
            return res.status(404).json({ message: 'Agent not found' });
        }
        res.status(200).json(updatedAgent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteAgent = async (req, res) => {
    try {
        const agentId = req.params.id;
        const success = await agentsService.deleteAgent(agentId);
        if (!success) {
            return res.status(404).json({ message: 'Agent not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};