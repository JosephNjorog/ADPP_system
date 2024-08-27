const { body, validationResult } = require('express-validator');

const validateData = [
    body('field1').not().isEmpty().withMessage('Field1 is required'),
    body('field2').isNumeric().withMessage('Field2 must be a number'),
    // Add more validations as required
];

const dataValidationHandler = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = { validateData, dataValidationHandler };
