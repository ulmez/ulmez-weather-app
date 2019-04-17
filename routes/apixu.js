var express = require('express');
var router = express.Router();
var apixuController = require('../controllers/ApixuController');

router.get('/apixu/city', apixuController.search_city);

module.exports = router;
