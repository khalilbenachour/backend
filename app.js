'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const voyagesRouter = require('./routes/voyages');
const lignesRouter = require('./routes/lignes');
const appareilsRouter = require('./routes/appareils');
const agentsRouter = require('./routes/agents');
const authRouter = require('./routes/auth');
const recettesRouter = require('./routes/recettes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route imports
app.use('/api/voyages', voyagesRouter);
app.use('/api/lignes', lignesRouter);
app.use('/api/appareils', appareilsRouter);
app.use('/api/agents', agentsRouter);
app.use('/api/auth', authRouter);
app.use('/api/recettes', recettesRouter);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
