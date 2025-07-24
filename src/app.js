const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('../config/db'); // DB 연결 import

const app = express();
const PORT = process.env.PORT || 8282;

app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const characterRoutes = require('./routes/characterRoutes');

app.use(authRoutes);
app.use(userRoutes);
app.use(characterRoutes);

app.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');
    res.send(`서버 작동 중! 현재 시간: ${result.rows[0].now}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('DB 연결 실패');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 서버 실행 중: http://localhost:${PORT}`);
});
