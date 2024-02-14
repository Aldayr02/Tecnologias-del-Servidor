const router = require('express').Router();
const usersController = require('../controllers/users-controllers');

router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.postUser);
router.put('/:id',usersController.putUserId);
router.delete('/:id', usersController.delete);

module.exports = router;