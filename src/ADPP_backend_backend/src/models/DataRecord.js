const mongoose = require('mongoose');

const DataRecordSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    cases: {
        type: Number,
        required: true
    },
    deaths: {
        type: Number,
        required: true
    },
    recoveries: {
        type: Number,
        required: true
    },
    submittedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('DataRecord', DataRecordSchema);