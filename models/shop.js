const { Schema, model } = require('mongoose');

const {handleMongooseError} = require("../helpers");

const shopSchema = new Schema(
    {
    id: {
        type: String,
    },
    name: {
        type: String,
    },
    drugslist: [
            {
                name: {
                    type: String,
            },
                photo: {
                     type: String,
            },
                description: {
                     type: String,
            },
                price: {
                    type: Number,
            },
        }
    ],
}, {versionKey: false, timestamps: true});

shopSchema.post("save", handleMongooseError);

const Shop = model('shop', shopSchema);

module.exports = Shop;