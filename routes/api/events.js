const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/events');
const { isValidId } = require('../../middlewares');

router.get('/', ctrl.listEvents)

router.get('/:id', isValidId, ctrl.getEventById)

router.post('/:id/participants', isValidId, ctrl.addParticipantToEvent);

module.exports = router;
