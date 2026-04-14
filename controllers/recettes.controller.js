// receipts.controller.js

// Statistics Handler
exports.getStatistics = (req, res) => {
    // Logic for calculating statistics
    res.send({ message: 'Statistics Data' });
};

// Receipts Handler
exports.getReceipts = (req, res) => {
    // Logic for retrieving receipts
    res.send({ message: 'Receipts Data' });
};