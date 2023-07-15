const express = require('express');
const router = express.Router();

const data = require('../data.json');

router.get('/', (req, res) => {
  res.json(data.songs);
});

module.exports = router;
