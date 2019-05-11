var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController');
var checkAuth = require('../middleware/checkAuth');

router.post('/user', checkAuth, userController.get_user);
router.post('/user/register', userController.register_user);
router.post('/user/login', userController.login_user);
router.post('/user/auth', checkAuth, userController.authenticate);
router.post('/user/logout', checkAuth, userController.logout_user);
router.post('/user/editlist', checkAuth, userController.edit_list);
router.post('/user/addlist', checkAuth, userController.add_list);
router.post('/user/deletelist', checkAuth, userController.delete_list);

module.exports = router;
