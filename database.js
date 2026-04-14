// legacy database connection for backward compatibility

const mongoose = require('mongoose');

const legacyDBUri = process.env.LEGACY_DB_URI;

if (!legacyDBUri) {
    console.error('Legacy database URI is not defined');
    process.exit(1);
}

const legacyConnection = mongoose.createConnection(legacyDBUri, {
    useNewUrlParser: true,  
    useUnifiedTopology: true,
});

legacyConnection.on('error', (err) => {
    console.error('Error connecting to legacy database:', err);
});

legacyConnection.once('open', () => {
    console.log('Connected to legacy database');
});

module.exports = legacyConnection;