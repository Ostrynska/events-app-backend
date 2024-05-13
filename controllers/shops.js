const Shop = require('../models/shop');
const { HttpError, ctrlWrapper } = require("../helpers");

const listShops = async (req, res) => {
    const result = await Shop.find({}, "-createdAt -updatedAt");
    res.json(result);
}

const getShopById = async (req, res) => {
    const {id} = req.params;
    const result = await Shop.findById(id);
    if (!result) {
      throw HttpError(404, 'Not found');
    }
    res.json(result);
}

module.exports = {
    listShops: ctrlWrapper(listShops),
    getShopById: ctrlWrapper(getShopById),
}