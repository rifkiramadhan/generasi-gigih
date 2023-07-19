class Song {
  constructor(image, title, artists, url) {
    this.image = image;
    this.title = title;
    this.artists = artists;
    this.url = url;
    this.playCount = 0;
  }
}

module.exports = Song;
