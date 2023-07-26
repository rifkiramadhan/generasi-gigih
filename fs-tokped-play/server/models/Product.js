const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  linkProduct: String,
  title: String,
  price: Number,
  videoID: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
});

mongoose.model('Product', ProductSchema);
