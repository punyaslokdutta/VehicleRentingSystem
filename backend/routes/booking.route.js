

var express = require('express');
var bookingController = require('../controllers/branch.js');


var router = express.Router();

router.get('/:id', bookingController.getBooking);

module.exports = router;
