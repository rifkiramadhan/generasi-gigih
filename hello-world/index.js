const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.use((req, res, next) => {
  req.url = req.url.toUpperCase();
  next();
});

app.get('/playlist', (req, res) => {
  const playlist = {
    banners: [
      {
        image: './src/assets/images/rossa.jpeg',
      },
      { image: './src/assets/images/mahalini.jpeg' },
      {
        image: './src/assets/images/lyodra.jpeg',
      },
      {
        image: './src/assets/images/ariel.jpeg',
      },
    ],
    artists: [
      {
        artist: 'Rossa',
        image: './src/assets/images/rossa.jpeg',
        audio: './src/assets/audio/rossa-tcinta.mp3',
        description: 'Terlalu Cinta',
      },
      {
        artist: 'Mahalini',
        image: './src/assets/images/mahalini.jpeg',
        audio: './src/assets/audio/mahalini-sial.mp3',
        description: 'Sial',
      },
      {
        artist: 'Lyodra',
        image: './src/assets/images/lyodra.jpeg',
        audio: './src/assets/audio/lyodra-sdewi.mp3',
        description: 'Sang Dewi',
      },
      {
        artist: 'Noah',
        image: './src/assets/images/ariel.jpeg',
        audio: './src/assets/audio/noah-yterdalam.mp3',
        description: 'Yang Terdalam',
      },
      {
        artist: 'Judika',
        image: './src/assets/images/judika.jpeg',
        audio: './src/assets/audio/judika-bkatbb.mp3',
        description: 'Bagaimana Kalau...',
      },
      {
        artist: 'Anji',
        image: './src/assets/images/anji.jpeg',
        audio: './src/assets/audio/anji-dia.mp3',
        description: 'Dia',
      },
      {
        artist: 'Budi Doremi',
        image: './src/assets/images/budi.jpeg',
        audio: './src/assets/audio/budi-mesinw.mp3',
        description: 'Mesin Waktu',
      },
      {
        artist: 'Mario G Klau',
        image: './src/assets/images/mario.jpeg',
        audio: './src/assets/audio/mario-smtkrm.mp3',
        description: 'Semata Karena...',
      },
      {
        artist: 'Tulus',
        image: './src/assets/images/tulus.jpeg',
        audio: './src/assets/audio/tulus-hatihati.mp3',
        description: 'Hati Hati di Jalan',
      },
    ],
  };
  // res.header('Access-Control-Allow-Origin', '*');
  res.json(playlist);
});

app.get('/songs', (req, res) => {
  const songs = {
    work: [
      {
        artist: 'This Is Work Music',
        image: './src/assets/images/work1.jpg',
        title: 'This Is Work Music',
        audio: './src/assets/audio/coffee-jazz.mp3',
        description: 'This Is Work Music',
      },
      {
        artist: 'This Is Upbeat Work Music',
        image: './src/assets/images/work2.jpg',
        title: 'This Is Upbeat Work Music',
        audio: './src/assets/audio/coffee-jazz.mp3',
        description: 'This Is Upbeat Work Music',
      },
      {
        artist: 'Music for a Workday',
        image: './src/assets/images/work3.jpeg',
        title: 'Music for a Workday',
        audio: './src/assets/audio/coffee-jazz.mp3',
        description: 'Music for a Workday',
      },
      {
        artist: 'Music for Writing',
        image: './src/assets/images/work4.jpeg',
        title: 'Music for Writing',
        audio: './src/assets/audio/coffee-jazz.mp3',
        description: 'Music for Writing',
      },
    ],
    sleep: [
      {
        artist: 'Sleep',
        image: './src/assets/images/sleep1.jpeg',
        title: 'Sleep',
        audio: './src/assets/audio/sleep-jazz.mp3',
        description: 'Sleep',
      },
      {
        artist: 'Deep Sleep',
        image: './src/assets/images/sleep2.jpeg',
        title: 'Deep Sleep',
        audio: './src/assets/audio/sleep-jazz.mp3',
        description: 'Deep Sleep',
      },
      {
        artist: 'Sleep',
        image: './src/assets/images/sleep3.jpg',
        title: 'Sleep',
        audio: './src/assets/audio/sleep-jazz.mp3',
        description: 'Sleep',
      },
      {
        artist: 'Songs For Sleeping',
        image: './src/assets/images/sleep4.jpeg',
        title: 'Songs For Sleeping',
        audio: './src/assets/audio/sleep-jazz.mp3',
        description: 'Songs For Sleeping',
      },
    ],
  };

  // res.header('Access-Control-Allow-Origin', '*');
  res.json(songs);
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
