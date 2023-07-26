const mongoose = require('mongoose');
const Comment = mongoose.model('Comment');
// const io = require('../server');
const myEmitter = require('../event');

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ videoID: req.params.videoID });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Fail', error: err });
  }
};

exports.postComment = async (req, res) => {
  const newComment = new Comment(req.body);
  try {
    await newComment.save();

    // Fetch all comments for this video
    const comments = await Comment.find({ videoID: newComment.videoID });

    // Emit an event with all comments for this video
    myEmitter.emit('newComment', comments);

    res.json({ message: 'Success' });
  } catch (err) {
    res.status(400).json({ message: 'Fail', error: err });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ message: 'Success', comment: updatedComment });
  } catch (err) {
    res.status(400).json({ message: 'Fail', error: err });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndRemove(req.params.id);
    res.json({ message: 'Success' });
  } catch (err) {
    res.status(400).json({ message: 'Fail', error: err });
  }
};
