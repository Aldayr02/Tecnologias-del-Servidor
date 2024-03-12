const ResponseStatus = require('../utils/response-status');
const UserModel = require('../models/user-model');
const token_utils = require('../utils/token');
const responseStatus = require('../utils/response-status');

function auth_middleware(req, res, next) {
  const token = req.query.token;
  const data = token_utils.decode(token);

  if (!token || !data) {
    res.status(ResponseStatus.UNAUTHORIZED).send(`Unauthorized`);
    return;
  }

  UserModel.findOne({ email: data.email })
    .then((response) => {
      if (!response) {
        res.status(ResponseStatus.UNAUTHORIZED).send(`Unauthorized`);
        return;
      }

      req.user = response;
      next();
    })
    .catch((e) => {
      res.status(ResponseStatus.BAD_REQUEST).send(`Something wrong in findOne middleware`);
      console.log(e);
    });
}

module.exports = auth_middleware;
