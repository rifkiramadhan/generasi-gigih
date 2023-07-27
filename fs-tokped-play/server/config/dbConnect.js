const mongoose = require('mongoose');
const mongoUrl = process.env.MONGO_URL;
const newLocal = '../models/Video';
require(newLocal);
require('../models/Product');
require('../models/Comment');

const dbConnect = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log('MongoDB Connected');
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
};

module.exports = dbConnect;
