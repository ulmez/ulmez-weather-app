var express = require('express');
var router = express.Router();
var testController = require('../controllers/TestController');
// var checkAuth = require('../middleware/checkAuth');

router.get('/test', testController.testus);

// router.get('/', checkAuth, userController.all_users);
// router.get('/user/:id', checkAuth, userController.one_user);
// router.post('/user/username', checkAuth, userController.one_user_on_username);
// router.post('/user/register', userController.register_user);
// router.post('/user/login', userController.login_user);
// router.post('/user/auth', checkAuth, userController.authenticate);
// router.post('/user/logout', checkAuth, userController.logout_user);
// router.post('/user/update/:id', checkAuth, userController.update_user);
// router.post('/user/delete/:id', checkAuth, userController.delete_user);

module.exports = router;
