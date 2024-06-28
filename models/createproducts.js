const mongoose = require('mongoose');

const productScema = new mongoose.Schema({

  category: String,
  brandbrand: String,
  description: String,
  s: String,
  m: String,
  l: String,
  xl: String,
  price: String,
  totalquanty: String,
  url1: String,
  url2: String,
  url3: String,
});


const product = mongoose.model('products', productScema);

module.exports = product;