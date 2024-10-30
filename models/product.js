
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  category: String
  // Add any other fields you need
});

module.exports = mongoose.model('Product', productSchema);