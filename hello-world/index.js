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

const data = require('./data.json');
const playlist = Array.isArray(data.playlist) ? data.playlist : [];
const songs = data.songs;
const otherPlaylist = data.playlist;

app.get('/playlist/filter', (req, res) => {
  const { artist } = req.query;
  const filteredPlaylist = playlist.filter(
    (song) =>
      song.artists && song.artists.toLowerCase().includes(artist.toLowerCase())
  );
  res.json(filteredPlaylist);
});

app.get('/playlist', (req, res) => {
  res.json(playlist);
});

app.get('/playlist/other-playlist', (req, res) => {
  res.json(otherPlaylist);
});

app.get('/songs', (req, res) => {
  res.json(songs);
});

app.post('/playlist/add', (req, res) => {
  const { image, title, artists, url } = req.body;
  const newSong = { image, title, artists, url };
  playlist.push(newSong);
  res.json({ message: 'Song added to playlist', song: newSong });
});

app.get('/playlist/play/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < playlist.length) {
    const song = playlist[index];
    res.json({ message: 'Playing song', song });
  } else {
    res.status(404).json({ message: 'Song not found' });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
