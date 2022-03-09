const jwt = require('jsonwebtoken');

module.exports = function generateJWT(data) {
  return jwt.sign(data, 'a');
}