

var express = require('express');
var branchController = require('../controllers/branch.js');


var router = express.Router();

router.get('/:id', branchController.getBranch);
router.get('/', branchController.getOrFilterBranches);

module.exports = router;
