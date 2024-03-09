const UserModel = require("../models/user-model");
const ResponseStatus = require("../utils/response-status");

class UsersController {
  singUp(req, res) {
    const data = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    };

    UserModel.create(data)
      .then((response) => {
        res.send(response);
      })
      .catch((e) => {
        res
          .status(ResponseStatus.BAD_REQUEST)
          .send("Something wrong singUp " + e);
      });
  }
}

module.exports = new UsersController();
