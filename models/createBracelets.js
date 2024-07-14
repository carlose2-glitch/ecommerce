const mongoose = require('mongoose');

const schemaBracelets = new mongoose.Schema({
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

const bracelets = mongoose.model('bracelets', schemaBracelets);

module.exports = bracelets;