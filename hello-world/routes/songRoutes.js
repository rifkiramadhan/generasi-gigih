const express = require('express');
const router = express.Router();

const data = require('../data.json');

router.get('/', (req, res) => {
  // Menangani kesalahan saat mengambil daftar lagu
  try {
    res.json(data.songs);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Terjadi kesalahan saat mengambil daftar lagu' });
  }
});

module.exports = router;
