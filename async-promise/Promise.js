const getSongListPromise = (songPromise) => {
  songPromise
    .then((songList) => {
      console.log('SONG LIST:');
      console.log(`=======================`);

      songList.forEach((song) => {
        console.log(`Title: ${song.title}`);
        console.log(`Artist: ${song.artists[0].name}`);
        console.log(`Duration: ${song.duration}`);
        console.log(`=======================`);
      });
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
};

// Membuat arrow function dengan nama songListPromise untuk meresolve dan mereject promise
const songListPromise = new Promise((resolve, reject) => {
  // Membuat daftar lagu
  const songList = [
    { title: 'Song 1', artists: [{ name: 'Artist 1 ' }], duration: 200 },
    { title: 'Song 2', artists: [{ name: 'Artist 2 ' }], duration: 180 },
    { title: 'Song 3', artists: [{ name: 'Artist 3 ' }], duration: 220 },
  ];

  // Jika ingin meresolve promise dengan sukses
  resolve(songList);

  // Jika ingin mereject promise
  // reject('Failed to fetch song list');
});

getSongListPromise(songListPromise);
