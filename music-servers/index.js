const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

const url = 'mongodb://localhost:27017';
const dbName = 'music_database';
app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mongoose model Artist dan koneksi ke MongoDB
const artistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
});

// Mongoose model Popular dan koneksi ke MongoDB
const popularSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  plays: {
    type: Number,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
});

// Mongoose model Songs dan koneksi ke MongoDB
const songsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist',
    required: true,
  },
  album: {
    type: String,
    required: true,
  },
});

const Songs = mongoose.model('Songs', songsSchema, 'songs');
const Popular = mongoose.model('Popular', popularSchema, 'popular');
const Artist = mongoose.model('Artist', artistSchema, 'artists');

mongoose
  .connect(`${url}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => {
    console.log('Connected successfully to MongoDB');
  })
  .catch((err) => {
    console.error('Error while connecting to MongoDB:', err);
  });

app.get('/artists/songs', async (req, res) => {
  try {
    // Mengambil data songs dari database (limit 10 data)
    const artistsRoutes = await Songs.find().limit(10);
    res.json(artistsRoutes);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/artists/popular', async (req, res) => {
  try {
    // Mengambil data popular dari database (limit 10 data)
    const artistsRoutes = await Popular.find().limit(10);
    res.json(artistsRoutes);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/artists', async (req, res) => {
  try {
    // Mengambil data artists dari database (limit 10 data)
    const artistsRoutes = await Artist.find().limit(10);
    res.json(artistsRoutes);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route default untuk root path
app.get('/', (req, res) => {
  res.send('Selamat datang di aplikasi Express.js dengan MongoDB!');
});

// Route untuk handle 404 Not Found
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Jalankan server Express
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
