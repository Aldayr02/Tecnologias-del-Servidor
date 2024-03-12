const router = require('express').Router();
const usersController = require('../controllers/users-controllers');

router.post('/singup', usersController.singUp);
router.post('/login', usersController.logIn);
router.get('/login', (req, res) => {
  res.render('login', { layout: 'login-layout' });
});

module.exports = router;
