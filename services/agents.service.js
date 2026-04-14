class AgentsService {
    constructor() {
        this.agents = [];
    }

    // Create a new agent
    create(agent) {
        this.agents.push(agent);
        return agent;
    }

    // Get all agents
    getAll() {
        return this.agents;
    }

    // Get agent by ID
    getById(id) {
        return this.agents.find(agent => agent.id === id);
    }

    // Update agent by ID
    update(id, updatedAgent) {
        const index = this.agents.findIndex(agent => agent.id === id);
        if (index !== -1) {
            this.agents[index] = { ...this.agents[index], ...updatedAgent };
            return this.agents[index];
        }
        return null;
    }

    // Delete agent by ID
    delete(id) {
        const index = this.agents.findIndex(agent => agent.id === id);
        if (index !== -1) {
            return this.agents.splice(index, 1);
        }
        return null;
    }
}

module.exports = AgentsService;