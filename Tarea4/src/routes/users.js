const router = require('express').Router();
const usersController = require('../controllers/users-controllers');

router.post('/singup', usersController.singUp);

router.get('/singup', (req, res) => {
  res.render('singup');
});

router.get('/successful-singup', (req, res) => {
  console.log('AAAAAAA');
  res.render('successfulSingup');
});

router.post('/login', usersController.logIn);
router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;
