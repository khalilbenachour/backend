// Voyage Validation Logic

// Function to validate voyage data
function validateVoyage(voyage) {
    const { destination, departure, arrival, passengers } = voyage;

    // Check for required fields
    if (!destination || !departure || !arrival) {
        throw new Error('Destination, departure, and arrival are required fields.');
    }

    // Check if arrival is after departure
    if (new Date(arrival) <= new Date(departure)) {
        throw new Error('Arrival time must be after departure time.');
    }

    // Check if passengers is a positive number
    if (passengers <= 0) {
        throw new Error('Number of passengers must be a positive number.');
    }

    return true; // Validation passed
}

module.exports = { validateVoyage };