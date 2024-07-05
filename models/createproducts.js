const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

  category: String,
  description: String,
  brand: String,
  s: String,
  m: String,
  l: String,
  xl: String,
  url1: String,
  url2: String,
  url3: String,
  price: String,
  totalquanty: String,

});


const product = mongoose.model('shirts-or-caps', productSchema);

module.exports = product;