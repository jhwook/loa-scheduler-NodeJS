const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/auth/signup', authController.signup);
router.post('/auth/signin', authController.signin);
router.post('/auth/api_key', authMiddleware, authController.setApiKey);

module.exports = router;
