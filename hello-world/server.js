const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  req.url = req.url.toUpperCase();
  next();
});

const playlistRoutes = require('./routes/playlistRoutes');
const songRoutes = require('./routes/songRoutes');

app.use('/playlist', playlistRoutes);
app.use('/songs', songRoutes);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
