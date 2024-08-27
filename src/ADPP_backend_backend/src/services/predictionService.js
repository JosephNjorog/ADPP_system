const { Actor, HttpAgent } = require('@dfinity/agent');
const { idlFactory } = require('../../declarations/prediction_engine');
const DataRecord = require('../models/DataRecord');

const agent = new HttpAgent();
const predictionEngineActor = Actor.createActor(idlFactory, { agent, canisterId: process.env.PREDICTION_ENGINE_CANISTER_ID });

exports.getHistoricalData = async (location) => {
    return await DataRecord.find({ location }).sort({ date: 1 });
};

exports.predictOutbreak = async (historicalData, days) => {
    try {
        const features = historicalData.map(record => [record.cases, record.deaths, record.recoveries]);
        const labels = historicalData.map(record => record.cases);

        await predictionEngineActor.trainModel(features.map((f, i) => ({ features: f, label: labels[i] })));

        const latestData = historicalData[historicalData.length - 1];
        const prediction = await predictionEngineActor.predict([latestData.cases, latestData.deaths, latestData.recoveries]);

        return {
            cases: Math.round(prediction * days),
            deaths: Math.round(prediction * 0.02 * days), // Assuming a 2% fatality rate
            confidence: 0.85 // This should be calculated based on the model's performance
        };
    } catch (error) {
        console.error('Error generating prediction:', error);
        throw error;
    }
};