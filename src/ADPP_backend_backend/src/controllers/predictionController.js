const Prediction = require('../models/Prediction');
const predictionService = require('../services/predictionService');

exports.generatePrediction = async (req, res) => {
    try {
        const { location, days } = req.body;
        
        // Get historical data for the location
        const historicalData = await predictionService.getHistoricalData(location);
        
        // Use the prediction engine canister to generate a prediction
        const predictionResult = await predictionService.predictOutbreak(historicalData, days);
        
        const newPrediction = new Prediction({
            location,
            predictionDate: new Date(),
            predictionDays: days,
            predictedCases: predictionResult.cases,
            predictedDeaths: predictionResult.deaths,
            confidence: predictionResult.confidence
        });

        await newPrediction.save();

        res.json(newPrediction);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getPredictions = async (req, res) => {
    try {
        const predictions = await Prediction.find().sort({ predictionDate: -1 });
        res.json(predictions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getPredictionByLocation = async (req, res) => {
    try {
        const { location } = req.params;
        const predictions = await Prediction.find({ location }).sort({ predictionDate: -1 });
        res.json(predictions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};