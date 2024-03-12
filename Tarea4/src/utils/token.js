const jwt = require('jsonwebtoken');

function create(data) {
  return jwt.sign(data, process.env.KEY_TOKEN);
}

function decode(token) {
  try {
    return jwt.verify(token, process.env.KEY_TOKEN);
  } catch (e) {
    return null;
  }
}

module.exports = { create, decode };
