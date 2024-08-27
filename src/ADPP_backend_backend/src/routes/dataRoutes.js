const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const dataController = require('../controllers/dataController');
const authMiddleware = require('../middlewares/authMiddleware');

// @route   POST api/data
// @desc    Submit new data
// @access  Private
router.post('/', [
    authMiddleware,
    [
        check('location', 'Location is required').not().isEmpty(),
        check('date', 'Date is required').isISO8601().toDate(),
        check('cases', 'Cases must be a number').isNumeric(),
        check('deaths', 'Deaths must be a number').isNumeric(),
        check('recoveries', 'Recoveries must be a number').isNumeric()
    ]
], dataController.submitData);

// @route   GET api/data
// @desc    Get all data
// @access  Private
router.get('/', authMiddleware, dataController.getData);

// @route   GET api/data/:location
// @desc    Get data for a specific location
// @access  Private
router.get('/:location', authMiddleware, dataController.getDataByLocation);

module.exports = router;