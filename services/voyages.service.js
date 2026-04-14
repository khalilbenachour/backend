// services/voyages.service.js

class VoyagesService {
    constructor() {
        this.voyages = [];
    }

    // Create a new voyage
    createVoyage(voyageData) {
        const voyage = {
            id: Date.now(),
            ...voyageData,
            createdAt: new Date(),
        };
        this.voyages.push(voyage);
        return voyage;
    }

    // Get all voyages
    getAllVoyages() {
        return this.voyages;
    }

    // Get a specific voyage by ID
    getVoyageById(id) {
        return this.voyages.find(v => v.id === id);
    }

    // Update a voyage
    updateVoyage(id, voyageData) {
        const index = this.voyages.findIndex(v => v.id === id);
        if (index !== -1) {
            this.voyages[index] = { ...this.voyages[index], ...voyageData };
            return this.voyages[index];
        }
        return null;
    }

    // Delete a voyage
    deleteVoyage(id) {
        const index = this.voyages.findIndex(v => v.id === id);
        if (index !== -1) {
            this.voyages.splice(index, 1);
            return true;
        }
        return false;
    }
}

module.exports = new VoyagesService();