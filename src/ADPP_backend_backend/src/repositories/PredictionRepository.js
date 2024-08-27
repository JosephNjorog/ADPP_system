// PredictionRepository.js
const Prediction = require('../models/Prediction');

class PredictionRepository {
    async findAll() {
        return await Prediction.find();
    }

    async findById(id) {
        return await Prediction.findById(id);
    }

    async create(prediction) {
        const newPrediction = new Prediction(prediction);
        return await newPrediction.save();
    }

    async update(id, updatedPrediction) {
        return await Prediction.findByIdAndUpdate(id, updatedPrediction, { new: true });
    }

    async delete(id) {
        return await Prediction.findByIdAndDelete(id);
    }
}

module.exports = new PredictionRepository();
