const DataRecord = require('../models/DataRecord');
const dataService = require('../services/dataService');

exports.submitData = async (req, res) => {
    try {
        const { location, date, cases, deaths, recoveries } = req.body;
        const newData = new DataRecord({
            location,
            date,
            cases,
            deaths,
            recoveries,
            submittedBy: req.user.id
        });

        const savedData = await newData.save();
        
        // Preprocess the data using the ICP canister
        const preprocessedData = await dataService.preprocessData(savedData);

        res.json(preprocessedData);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getData = async (req, res) => {
    try {
        const data = await DataRecord.find().sort({ date: -1 });
        res.json(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getDataByLocation = async (req, res) => {
    try {
        const { location } = req.params;
        const data = await DataRecord.find({ location }).sort({ date: -1 });
        res.json(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};