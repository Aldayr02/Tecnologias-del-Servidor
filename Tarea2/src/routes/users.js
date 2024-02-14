const router = require('express').Router();
const usersController = require('../controllers/users-controllers');
const loginCheck_middleware = require('../middlewares/logingCheck-middleware');

router.get('/', loginCheck_middleware, usersController.getUsers);
router.get('/:id', loginCheck_middleware, usersController.getUserById);
router.post('/', usersController.postUser);
router.put('/:id',usersController.putUserId);
router.delete('/:id', usersController.delete);

module.exports = router;