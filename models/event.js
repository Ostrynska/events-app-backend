const { Schema, model } = require('mongoose');

const {handleMongooseError} = require("../helpers");

const eventSchema = new Schema(
    {
    id: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
        },
    date: {
        type: String,
    },
    organizer: {
        type: String,
    },
    participants: [
            {
                name: {
                    type: String,
            },
                email: {
                     type: String,
            },
                birthdate: {
                     type: String,
            },
                referrer: {
                    type: String,
            },
        }
    ],
}, {versionKey: false, timestamps: true});

eventSchema.post("save", handleMongooseError);

const Event = model('event', eventSchema);

module.exports = Event;