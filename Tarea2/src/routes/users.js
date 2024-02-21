const router = require('express').Router();
const usersController = require('../controllers/users-controllers');
const loginCheck_middleware = require('../middlewares/logingCheck-middleware');
const roleCheck_middleware = require('../middlewares/roleCheck-middleware');

router.get('/', loginCheck_middleware, usersController.getUsers);
router.get('/:id', loginCheck_middleware, usersController.getUserById);
router.post('/', loginCheck_middleware, roleCheck_middleware, usersController.postUser);
router.put('/:id', loginCheck_middleware, roleCheck_middleware, usersController.putUserId);
router.delete('/:id', loginCheck_middleware, roleCheck_middleware, usersController.delete);

module.exports = router;