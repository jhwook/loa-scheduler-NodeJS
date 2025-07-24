const express = require('express');
const router = express.Router();
const authMiddleWare = require('../middlewares/authMiddleware');
const characterController = require('../controllers/characterController');

router.get(
  '/characters/all',
  authMiddleWare,
  characterController.getAllCharacters
);

router.post(
  '/characters/save',
  authMiddleWare,
  characterController.saveCharacters
);

module.exports = router;
