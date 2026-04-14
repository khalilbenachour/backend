// services/lignes.service.js

class LignesService {
    constructor() {
        this.segments = [];
        this.arrets = [];
    }

    // Method to add a segment
    addSegment(segment) {
        this.segments.push(segment);
    }

    // Method to get all segments
    getSegments() {
        return this.segments;
    }

    // Method to add an arret
    addArret(arret) {
        this.arrets.push(arret);
    }

    // Method to get all arrets
    getArrets() {
        return this.arrets;
    }
}

module.exports = new LignesService();
