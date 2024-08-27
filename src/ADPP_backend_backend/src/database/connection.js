const mongoose = require('mongoose');
const config = require('../config/server');

const connectDatabase = async () => {
    try {
        await mongoose.connect(config.dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to the database');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
};

module.exports = connectDatabase;
