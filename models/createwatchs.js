const mongoose = require('mongoose');

const schemawatch = new mongoose.Schema({
  category: String,
  description: String,
  brand: String,
  mm38: String,
  mm39: String,
  mm40: String,
  mm41: String,
  url1: String,
  url2: String,
  url3: String,
  price: String,
  totalquanty: String,
});

const watch = mongoose.model('watch', schemawatch);

module.exports = watch;