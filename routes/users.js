var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController');

router.post('/user/register', userController.register_user);
router.get('/user/auth', userController.authenticate);

module.exports = router;
