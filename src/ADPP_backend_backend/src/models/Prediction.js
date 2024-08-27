const mongoose = require('mongoose');

const PredictionSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    predictionDate: {
        type: Date,
        required: true
    },
    predictionDays: {
        type: Number,
        required: true
    },
    predictedCases: {
        type: Number,
        required: true
    },
    predictedDeaths: {
        type: Number,
        required: true
    },
    confidence: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Prediction', PredictionSchema);