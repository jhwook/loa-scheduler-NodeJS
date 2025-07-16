const jwt = require('jsonwebtoken');
require('dotenv').config();

const createToken = (userId, username) => {
  return jwt.sign({ userId, username }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

module.exports = {
  createToken,
};
