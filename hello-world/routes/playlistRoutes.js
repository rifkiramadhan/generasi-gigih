const express = require('express');
const router = express.Router();

const data = require('../data.json');
const Playlist = require('../models/Playlist');

const yourPlaylist = new Playlist(data.playlist);

router.get('/filter', (req, res) => {
  const { artist } = req.query;
  const filteredPlaylist = yourPlaylist.filterSongsByArtist(artist);
  res.json(filteredPlaylist);
});

router.get('/', (req, res) => {
  res.json(yourPlaylist.songs);
});

router.get('/other-playlist', (req, res) => {
  res.json(data.playlist);
});

router.post('/add', (req, res) => {
  const { image, title, artists, url } = req.body;
  yourPlaylist.addSong(image, title, artists, url);
  res.json({
    message: 'Music berhasil ditambahkan ke Your Playlist',
    song: yourPlaylist.songs[yourPlaylist.songs.length - 1],
  });
});

router.get('/play/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < yourPlaylist.songs.length) {
    const song = yourPlaylist.songs[index];
    song.playCount++;
    res.json({ message: 'Music Dimainkan', song });
  } else {
    res.status(404).json({ message: 'Music Tidak Ditemukan' });
  }
});

router.get('/most-played', (req, res) => {
  const sortedSongs = yourPlaylist.getMostPlayedSongs();
  res.json(sortedSongs);
});

module.exports = router;
