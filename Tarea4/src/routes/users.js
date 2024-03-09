const router = require("express").Router();
const usersController = require("../controllers/users-controllers");

router.post("/singup", usersController.singUp);

module.exports = router;
