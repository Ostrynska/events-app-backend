const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
    const { _id } = req.params;
    if (!isValidObjectId(_id)) {
        return next(HttpError(400, `${_id} is not a valid id`));
    }
    next();
};

module.exports = isValidId;
