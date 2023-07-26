const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({ videoID: req.params.videoID });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Fail', error: err });
  }
};

exports.postProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    await newProduct.save();
    res.json({ message: 'Success' });
  } catch (err) {
    res.status(400).json({ message: 'Fail', error: err });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ message: 'Success', product: updatedProduct });
  } catch (err) {
    res.status(400).json({ message: 'Fail', error: err });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndRemove(req.params.id);
    res.json({ message: 'Success' });
  } catch (err) {
    res.status(400).json({ message: 'Fail', error: err });
  }
};
