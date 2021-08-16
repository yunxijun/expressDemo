const { validationResult, buildCheckFunction } = require('express-validator');
const {isValidObjectId} = require('mongoose')

// can be reused by many routes

// parallel processing
const validate = validations => {
    return async (req, res, next) => {
        await Promise.all(validations.map(validation => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        res.status(400).json({ errors: errors.array() });
    };
};

exports = module.exports = validate


exports.isValidObjectId = (location, field) => {
    return buildCheckFunction(location)(field).custom(async value => {
        if (!isValidObjectId(value)) {
            return Promise.reject('ID 不是一个有效的objectID')
        }
    })
}