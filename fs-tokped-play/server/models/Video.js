const mongoose = require('mongoose');

const VideoSchema = mongoose.Schema({
  urlImage: String,
  thumbnail: String,
  videoID: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
});

mongoose.model('Video', VideoSchema);
