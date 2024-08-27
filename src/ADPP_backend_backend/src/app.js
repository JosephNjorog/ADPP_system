const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./utils/db');
const errorHandler = require('./middlewares/errorHandler');
const authRoutes = require('./routes/authRoutes');
const dataRoutes = require('./routes/dataRoutes');
const predictionRoutes = require('./routes/predictionRoutes');

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/data', dataRoutes);
app.use('/api/predictions', predictionRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;