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

class Song {
  constructor(image, title, artists, url) {
    this.image = image;
    this.title = title;
    this.artists = artists;
    this.url = url;
    this.playCount = 0;
  }
}

module.exports = Playlist;
