module.exports = {
    asyncHandler: fn => (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    },
    generateRandomString: length => {
        return Math.random().toString(36).substr(2, length);
    },
};
