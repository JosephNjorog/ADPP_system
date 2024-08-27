require('dotenv').config();

module.exports = {
    port: process.env.PORT || 5000,
    dbUri: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    apiBaseUrl: process.env.API_BASE_URL || '/api',
};
