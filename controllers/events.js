const Event = require('../models/event');
const { HttpError, ctrlWrapper } = require("../helpers");

const listEvents = async (req, res) => {
    const result = await Event.find({}, "-createdAt -updatedAt");
    res.json(result);
}

const getEventById = async (req, res) => {
    const { id } = req.params;
    const result = await Event.find(id);
    if (!result) {
      throw HttpError(404, 'Not found');
    }
    res.json(result);
}


module.exports = {
    listEvents: ctrlWrapper(listEvents),
    getEventById: ctrlWrapper(getEventById),
}