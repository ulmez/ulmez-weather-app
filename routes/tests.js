var express = require('express');
var router = express.Router();
var testController = require('../controllers/TestController');

router.get('/test', testController.testus);

module.exports = router;
