const authService = require('../services/authService');

exports.signup = async (req, res) => {
  const { username, password } = req.body;

  try {
    const token = await authService.signup(username, password);
    console.log('✅ 토큰 생성됨:', token);
    res.status(201).json({ token });
  } catch (err) {
    console.error('❌ 에러 발생:', err.message);
    res.status(400).json({ message: err.message });
  }
};

exports.signin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const token = await authService.signin(username, password);
    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.setApiKey = async (req, res) => {
  try {
    const {
      user,
      body: { apiKey },
    } = req;
    await authService.setApiKey(user, apiKey);
    res.status(200).json({ message: 'API 키가 설정되었습니다.' });
  } catch (err) {
    console.error('❌ 에러 발생:', err.message);
  }
};
