// Perintah untuk melihat seluruh database yang telah tersedia
show dbs

// Perintah untuk melihat seluruh collections yang tersedia
show collections

// Perintah untuk membuat Database Mongodb dengan nama indonesian_music
use indonesian_music

// Perintah untuk membuat songs collection dan masukkan data sebanyak 10 lagu
db.createCollection("songs")
db.songs.insertMany([
  {
    title: "Bukan Diriku",
    artist: "Samsons",
    album: "Naluri Lelaki"
  },
  {
    title: "Kisah Klasik Untuk Masa Depan",
    artist: "Sheila on 7",
    album: "Kisah Klasik Untuk Masa Depan"
  },
  {
    title: "Ruang Rindu",
    artist: "Letto",
    album: "Letto I"
  },
  {
    title: "Cinta Kan Membawamu Kembali",
    artist: "Dewa 19",
    album: "Format Masa Depan"
  },
  {
    title: "Rindu",
    artist: "Agnes Monica",
    album: "And the Story Goes"
  },
  {
    title: "Bila Kau Tak Disampingku",
    artist: "Sheila on 7",
    album: "07 Des"
  },
  {
    title: "Bukan Cinta Manusia Biasa",
    artist: "Ada Band",
    album: "Metamorphosis"
  },
  {
    title: "Jangan Menyerah",
    artist: "D'Masiv",
    album: "Menuju Nirwana"
  },
  {
    title: "Puisi",
    artist: "Jikustik",
    album: "Seribu Tahun Lamanya"
  },
  {
    title: "Cobalah Mengerti",
    artist: "Peterpan ft. Momonon",
    album: "OST. Alexandria"
  }
]);

// Perintah untuk membuat artists collection dan masukkan data sebanyak 10 artists
db.createCollection("artists")
db.artists.insertMany([
  {
    name: "Samsons",
    date_of_birth: "2000-05-01",
    genres: ["Rock", "Pop"]
  },
  {
    name: "Sheila on 7",
    date_of_birth: "1996-05-06",
    genres: ["Pop", "Alternative"]
  },
  {
    name: "Letto",
    date_of_birth: "2001-11-11",
    genres: ["Pop", "Alternative"]
  },
  {
    name: "Agnes Monica",
    date_of_birth: "1986-07-01",
    genres: ["Pop", "R&B"]
  },
  {
    name: "Ada Band",
    date_of_birth: "1996-06-16",
    genres: ["Pop", "Rock"]
  },
  {
    name: "D'Masiv",
    date_of_birth: "2003-03-03",
    genres: ["Pop", "Rock"]
  },
  {
    name: "Jikustik",
    date_of_birth: "1996-06-18",
    genres: ["Pop", "Ballad"]
  },
  {
    name: "Peterpan",
    date_of_birth: "2000-08-01",
    genres: ["Pop", "Rock"]
  },
  {
    name: "Momonon",
    date_of_birth: "2005-10-10",
    genres: ["Reggae"]
  },
  {
    name: "Nidji",
    date_of_birth: "2005-03-05",
    genres: ["Pop", "Rock"]
  }
]);

// Perintah untuk membuat popular songs collection dan masukkan data sebanyak 10 artists
db.createCollection("popularsongs")
db.popularsongs.insertMany([
   {
    title: "Bukan Diriku",
    play_count: 1300,
    period: "July 2023"
  },
  {
    title: "Kisah Klasik Untuk Masa Depan",
    play_count: 1100,
    period: "July 2023"
  },
  {
    title: "Ruang Rindu",
    play_count: 900,
    period: "July 2023"
  },
  {
    title: "Cinta Kan Membawamu Kembali",
    play_count: 1200,
    period: "July 2023"
  },
  {
    title: "Rindu",
    play_count: 950,
    period: "July 2023"
  },
  {
    title: "Bila Kau Tak Disampingku",
    play_count: 800,
    period: "July 2023"
  },
  {
    title: "Bukan Cinta Manusia Biasa",
    play_count: 1500,
    period: "July 2023"
  },
  {
    title: "Jangan Menyerah",
    play_count: 1400,
    period: "July 2023"
  },
  {
    title: "Puisi",
    play_count: 700,
    period: "July 2023"
  },
  {
    title: "Cobalah Mengerti",
    play_count: 1600,
    period: "July 2023"
  }
]);

// Perintah untuk menampilkan data artists, popularsongs, dan songs
db.artists.find()
db.popularsongs.find()
db.songs.find()