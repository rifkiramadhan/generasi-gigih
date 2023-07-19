const Song = require('./Song');

class Playlist {
  constructor(songs) {
    this.songs = Array.isArray(songs) ? songs : [];
  }

  addSong(image, title, artists, url) {
    const newSong = new Song(image, title, artists, url);
    this.songs.push(newSong);
  }

  filterSongsByArtist(artist) {
    return this.songs.filter(
      (song) =>
        song.artists &&
        song.artists.toLowerCase().includes(artist.toLowerCase())
    );
  }

  getMostPlayedSongs() {
    return this.songs.sort((a, b) => b.playCount - a.playCount);
  }
}

module.exports = Playlist;
