// Sample code before splitting and before using try catch
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

class Song {
  constructor(image, title, artists, url) {
    this.image = image;
    this.title = title;
    this.artists = artists;
    this.url = url;
    this.playCount = 0;
  }
}

class Playlist {
  constructor() {
    this.songs = [];
  }

  addSong(image, title, artists, url) {
    const newSong = new Song(image, title, artists, url);
    this.songs.push(newSong);
  }

  getMostPlayedSongs() {
    return this.songs.sort((a, b) => b.playCount - a.playCount);
  }
}

const yourPlaylist = new Playlist();

app.get('/playlist/filter', (req, res) => {
  const { artist } = req.query;
  const filteredPlaylist = yourPlaylist.songs.filter(
    (song) =>
      song.artists && song.artists.toLowerCase().includes(artist.toLowerCase())
  );
  res.json(filteredPlaylist);
});

app.get('/playlist', (req, res) => {
  res.json(yourPlaylist.songs);
});

app.get('/playlist/other-playlist', (req, res) => {
  res.json(otherPlaylist);
});

app.get('/songs', (req, res) => {
  res.json(songs);
});

app.post('/playlist/add', (req, res) => {
  const { image, title, artists, url } = req.body;
  yourPlaylist.addSong(image, title, artists, url);
  res.json({
    message: 'Music berhasil ditambahkan ke Your Playlist',
    song: yourPlaylist.songs[yourPlaylist.songs.length - 1],
  });
});

app.get('/playlist/play/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < yourPlaylist.songs.length) {
    const song = yourPlaylist.songs[index];
    song.playCount++;
    res.json({ message: 'Music Dimainkan', song });
  } else {
    res.status(404).json({ message: 'Music Tidak Ditemukan' });
  }
});

app.get('/playlist/most-played', (req, res) => {
  const sortedSongs = yourPlaylist.getMostPlayedSongs();
  res.json(sortedSongs);
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
