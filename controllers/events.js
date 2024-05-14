const Event = require('../models/event');
const { HttpError, ctrlWrapper } = require("../helpers");

const listEvents = async (req, res) => {
    const result = await Event.find({}, "-createdAt -updatedAt");
    res.json(result);
}

const getEventById = async (req, res) =>
{
    const { id } = req.params;
    const result = await Event.findById(id);
    if (!result) {
        throw HttpError(404, 'Not found');
    }
    res.json(result);
}

const addParticipantToEvent = async (req, res) => {
    const { id } = req.params;
    const eventData = req.body;
    try {
        const event = await Event.findById(id);
        if (!event) {
            throw HttpError(404, 'Event not found');
        }
        event.participants.push(eventData);
        await event.save();
        res.status(201).json(event);
    } catch (error) {
        console.error(error);
        throw HttpError(500, 'Server error');
    }
}

module.exports = {
    listEvents: ctrlWrapper(listEvents),
    getEventById: ctrlWrapper(getEventById),
    addParticipantToEvent: ctrlWrapper(addParticipantToEvent)
}