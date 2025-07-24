const authService = require('../services/authService');

exports.setApiKey = async (req, res) => {
  console.log('setApiKey called with user:', req.user);
};
