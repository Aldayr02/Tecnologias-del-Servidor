const router = require('express').Router();
const usersController = require('../controllers/users-controllers');

router.post('/singup', usersController.singUp);
router.post('/login', usersController.logIn);

module.exports = router;
