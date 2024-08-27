const jwt = require('jsonwebtoken');
const config = require('config');

exports.generateToken = (userId) => {
    return new Promise((resolve, reject) => {
        const payload = {
            user: {
                id: userId
            }
        };

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn: '1h' },
            (err, token) => {
                if (err) reject(err);
                resolve(token);
            }
        );
    });
};