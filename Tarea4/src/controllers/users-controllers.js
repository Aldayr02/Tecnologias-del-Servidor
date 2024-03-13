const UserModel = require('../models/user-model');
const ResponseStatus = require('../utils/response-status');
const token_utils = require('../utils/token');

class UsersController {
  singUp(req, res) {
    // console.log(req.body.username);
    const data = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    };

    UserModel.create(data)
      .then((response) => {
        // console.log(`then of UserModel.create`);
        res.send(response);
      })
      .catch((e) => {
        console.log(e);
        res.status(ResponseStatus.BAD_REQUEST).send('Something wrong singUp ' + e);
      });
  }

  logIn(req, res) {
    const data = {
      email: req.body.email,
      password: req.body.password,
    };

    UserModel.findOne(data)
      .then((response) => {
        // console.log(response.username);
        if (response) {
          const user_data = {
            name: response.username,
            email: response.email,
          };

          const send_token = token_utils.create(user_data);
          res.send({ token: send_token });
        } else {
          res.status(ResponseStatus.UNAUTHORIZED).send(`Invalid credentials`);
        }
      })
      .catch((e) => {
        res.status(ResponseStatus.BAD_REQUEST).send('Something wrong logIN ' + e);
      });
  }
}

module.exports = new UsersController();
