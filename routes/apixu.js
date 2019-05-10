var express = require('express');
var router = express.Router();
var apixuController = require('../controllers/ApixuController');

router.post('/apixu/cities', apixuController.search_cities);
router.get('/apixu/city/:name', apixuController.search_city);

module.exports = router;
