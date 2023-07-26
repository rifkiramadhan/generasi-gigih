const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
  username: String,
  comment: String,
  timestamp: { type: Date, default: Date.now },
  videoID: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
});

mongoose.model('Comment', CommentSchema);
