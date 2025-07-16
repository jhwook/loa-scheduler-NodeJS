const bcrypt = require('bcrypt');
const { User } = require('../models');
const { createToken } = require('../utils/jwt');

const signup = async (username, password) => {
  const existingUser = await User.findOne({ where: { username } });
  if (existingUser) {
    throw new Error('이미 사용 중인 아이디입니다.');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ username, password: hashedPassword });
  const token = createToken(newUser.id, newUser.username);
  return token;
};

const signin = async (username, password) => {
  const user = await User.findOne({ where: { username } });
  if (!user) {
    throw new Error('가입되지 않은 사용자입니다.');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('잘못된 비밀번호입니다.');
  }

  const token = createToken(user.id, user.username);
  return token;
};

module.exports = {
  signup,
  signin,
};
