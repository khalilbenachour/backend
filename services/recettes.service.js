class RecettesService {
    constructor() {
        this.receipts = [];
    }

    // Create a new receipt
    create(receipt) {
        this.receipts.push(receipt);
        return receipt;
    }

    // Get all receipts
    getAll() {
        return this.receipts;
    }

    // Get statistics on receipts
    getStatistics() {
        const count = this.receipts.length;
        // Further statistics can be computed here
        return { count };
    }

    // Get receipt by ID
    getById(id) {
        return this.receipts.find(receipt => receipt.id === id);
    }

    // Update receipt by ID
    update(id, updatedReceipt) {
        const index = this.receipts.findIndex(receipt => receipt.id === id);
        if (index !== -1) {
            this.receipts[index] = { ...this.receipts[index], ...updatedReceipt };
            return this.receipts[index];
        }
        return null;
    }

    // Delete receipt by ID
    delete(id) {
        const index = this.receipts.findIndex(receipt => receipt.id === id);
        if (index !== -1) {
            return this.receipts.splice(index, 1)[0];
        }
        return null;
    }
}

module.exports = RecettesService;