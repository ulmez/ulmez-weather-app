var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController');

router.post('/user', userController.get_user);
router.post('/user/register', userController.register_user);
router.post('/user/login', userController.login_user);
router.post('/user/auth', userController.authenticate);
router.post('/user/logout', userController.logout_user);
router.post('/user/editlist', userController.edit_list);
router.post('/user/addlist', userController.add_list);
router.post('/user/deletelist', userController.delete_list);

module.exports = router;
