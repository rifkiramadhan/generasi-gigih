const mongoose = require('mongoose');
const newLocal = './Video';
const mongoUrl = process.env.MONGO_URL;
require(newLocal);
require('./Product');
require('./Comment');

// Connect to MongoDB
mongoose
  .connect(mongoUrl)
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));
