

var express = require('express');
var vehicleController = require('../controllers/vehicle.js');


var router = express.Router();

router.get('/:id', vehicleController.getVehicle);
router.get('/', vehicleController.getOrFilterBranches);

module.exports = router;
