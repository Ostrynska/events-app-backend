const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/orders');

router.get('/', ctrl.allOrders)
router.post('/', ctrl.listOrders)

module.exports = router;
