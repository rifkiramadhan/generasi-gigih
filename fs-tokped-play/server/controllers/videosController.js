const mongoose = require('mongoose');
const Video = mongoose.model('Video');

exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.json(videos);
  } catch (err) {
    res.status(500).json({ message: 'Fail', error: err });
  }
};

exports.postVideo = async (req, res) => {
  const newVideo = new Video(req.body);
  try {
    await newVideo.save();
    res.json({ message: 'Success' });
  } catch (err) {
    res.status(400).json({ message: 'Fail', error: err });
  }
};

exports.updateVideo = async (req, res) => {
  try {
    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ message: 'Success', video: updatedVideo });
  } catch (err) {
    res.status(400).json({ message: 'Fail', error: err });
  }
};

exports.deleteVideo = async (req, res) => {
  try {
    await Video.findByIdAndRemove(req.params.id);
    res.json({ message: 'Success' });
  } catch (err) {
    res.status(400).json({ message: 'Fail', error: err });
  }
};
