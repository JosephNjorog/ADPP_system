const { body, validationResult } = require('express-validator');

const validateUser = [
    body('username').not().isEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Please include a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    // Add more validations as required
];

const userValidationHandler = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = { validateUser, userValidationHandler };
