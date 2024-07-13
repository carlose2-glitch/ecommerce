const mongoose = require('mongoose');

const schemaGlasses = new mongoose.Schema({
  category: String,
  description: String,
  brandandmodel: String,
  width1: String,
  bridge1: String,
  sideburns1: String,
  total1: String,
  width2: String,
  bridge2: String,
  sideburns2: String,
  total2: String,
  width3: String,
  bridge3: String,
  sideburns3: String,
  total3: String,
  price: String,
  amountt: String,
  url1: String,
  url2: String,
  url3: String,

});

const glasses = mongoose.model('glasses', schemaGlasses);

module.exports = glasses;
