const { Schema, model } = require('mongoose');
const { handleMongooseError } = require("../helpers");

const orderShemaByShop = new Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true },
    price: { type: Number, required: true },
    count: { type: Number, required: true },
    totalByDrug: { type: Number, required: true },
});

const drugSchema = new Schema({
    shop: { type: String, required: true },
    orderlist: [orderShemaByShop],
    totalPriceByShop: { type: Number, required: true },
});

const orderSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    drugslist: [drugSchema],
    total: { type: Number, required: true },
    order: { type: Number, required: true },
}, { timestamps: true });

orderSchema.post("save", handleMongooseError);

const Order = model('order', orderSchema);

module.exports = Order;
