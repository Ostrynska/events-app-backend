const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/shops');
const { isValidId } = require('../../middlewares');

router.get('/', ctrl.listShops)

router.get('/:id', isValidId, ctrl.getShopById)

module.exports = router;
