const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const predictionController = require('../controllers/predictionController');
const authMiddleware = require('../middlewares/authMiddleware');

// @route   POST api/predictions
// @desc    Generate a new prediction
// @access  Private
router.post('/', [
    authMiddleware,
    [
        check('location', 'Location is required').not().isEmpty(),
        check('days', 'Number of days for prediction is required').isNumeric()
    ]
], predictionController.generatePrediction);

// @route   GET api/predictions
// @desc    Get all predictions
// @access  Private
router.get('/', authMiddleware, predictionController.getPredictions);

// @route   GET api/predictions/:location
// @desc    Get predictions for a specific location
// @access  Private
router.get('/:location', authMiddleware, predictionController.getPredictionByLocation);

module.exports = router;