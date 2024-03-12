const router = require('express').Router();

const users_routes = require('../routes/users');
const news_routes = require('../routes/news');

router.use('/users', users_routes);
router.use('/news', news_routes);

router.get('/', (req, res) => {
  res.render('home');
});

module.exports = router;
