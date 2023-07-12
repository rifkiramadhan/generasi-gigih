const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.use((req, res, next) => {
  req.url = req.url.toUpperCase();
  next();
});

const playlist = require('./data.json').playlist;
const songs = require('./data.json').songs;

app.get('/playlist', (req, res) => {
  res.json(playlist);
});

app.get('/songs', (req, res) => {
  res.json(songs);
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
