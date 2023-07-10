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
    banner: [
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
    artist: [
      {
        artist: 'Rossa',
        image: './src/assets/images/rossa.jpeg',
      },
      {
        artist: 'Mahalini',
        image: './src/assets/images/mahalini.jpeg',
      },
      {
        artist: 'Lyodra',
        image: './src/assets/images/lyodra.jpeg',
      },
      {
        artist: 'Noah',
        image: './src/assets/images/ariel.jpeg',
      },
      {
        artist: 'Judika',
        image: './src/assets/images/judika.jpeg',
      },
      {
        artist: 'Anji',
        image: './src/assets/images/anji.jpeg',
      },
    ],
  };

  // const playlist = [

  // ];

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
        description: 'This Is Work Music',
      },
      {
        artist: 'This Is Upbeat Work Music',
        image: './src/assets/images/work2.jpg',
        title: 'This Is Upbeat Work Music',
        description: 'This Is Upbeat Work Music',
      },
      {
        artist: 'Music for a Workday',
        image: './src/assets/images/work3.jpeg',
        title: 'Music for a Workday',
        description: 'Music for a Workday',
      },
      {
        artist: 'Music for Writing',
        image: './src/assets/images/work4.jpeg',
        title: 'Music for Writing',
        description: 'Music for Writing',
      },
    ],
    sleep: [
      {
        artist: 'Sleep',
        image: './src/assets/images/sleep1.jpeg',
        title: 'Sleep',
        description: 'Sleep',
      },
      {
        artist: 'Deep Sleep',
        image: './src/assets/images/sleep2.jpeg',
        title: 'Deep Sleep',
        description: 'Deep Sleep',
      },
      {
        artist: 'Sleep',
        image: './src/assets/images/sleep3.jpg',
        title: 'Sleep',
        description: 'Sleep',
      },
      {
        artist: 'Songs For Sleeping',
        image: './src/assets/images/sleep4.jpeg',
        title: 'Songs For Sleeping',
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
