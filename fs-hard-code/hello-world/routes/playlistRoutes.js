const express = require('express');
const router = express.Router();

const data = require('../data.json');
const Playlist = require('../models/Playlist');

const yourPlaylist = new Playlist(data.playlist);

router.get('/filter', (req, res) => {
  // Menangani kesalahan saat mengambil daftar lagu berdasarkan artis
  try {
    const { artist } = req.query;
    const filteredPlaylist = yourPlaylist.filterSongsByArtist(artist);
    res.json(filteredPlaylist);
  } catch (error) {
    res.status(500).json({
      message: 'Terjadi kesalahan saat mengambil daftar lagu berdasarkan artis',
    });
  }
});

router.get('/', (req, res) => {
  // Menangani kesalahan saat mengambil daftar lagu dari playlist
  try {
    res.json(yourPlaylist.songs);
  } catch (error) {
    res.status(500).json({
      message: 'Terjadi kesalahan saat mengambil daftar lagu dari playlist',
    });
  }
});

router.get('/other-playlist', (req, res) => {
  // Menangani kesalahan saat mengambil daftar playlist lain
  try {
    res.json(data.playlist);
  } catch (error) {
    res.status(500).json({
      message: 'Terjadi kesalahan saat mengambil daftar playlist lain',
    });
  }
});

router.post('/add', (req, res) => {
  // Menangani kesalahan saat menambahkan lagu ke playlist
  try {
    const { image, title, artists, url } = req.body;
    yourPlaylist.addSong(image, title, artists, url);
    res.json({
      message: 'Music berhasil ditambahkan ke Your Playlist',
      song: yourPlaylist.songs[yourPlaylist.songs.length - 1],
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Terjadi kesalahan saat menambahkan lagu ke playlist' });
  }
});

router.get('/play/:index', (req, res) => {
  // Menangani kesalahan saat memainkan lagu
  try {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < yourPlaylist.songs.length) {
      const song = yourPlaylist.songs[index];
      // Menambahkan jumlah count sebanya 1x setiap play music
      song.playCount++;
      res.json({ message: 'Music Dimainkan', song });
    } else {
      res.status(404).json({ message: 'Music Tidak Ditemukan' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan saat memainkan lagu' });
  }
});

router.get('/most-played', (req, res) => {
  // Menangani kesalahan saat mengambil daftar lagu yang paling sering dimainkan
  try {
    const sortedSongs = yourPlaylist.getMostPlayedSongs();
    res.json(sortedSongs);
  } catch (error) {
    res.status(500).json({
      message:
        'Terjadi kesalahan saat mengambil daftar lagu yang paling sering dimainkan',
    });
  }
});

module.exports = router;
