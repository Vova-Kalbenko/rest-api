const { HttpError } = require('../helpers');

const validateBody = schema => {
    const func = (req, res, next) => {
        const { error } = schema.validate(req.body); // если обишки нет - будет undefined и тогда вск ок
        if (error) {
            next(HttpError(400, error.message));
        }
        next();
    }
    return func;
}

module.exports = validateBody;
