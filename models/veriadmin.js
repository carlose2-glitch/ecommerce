const mongoose = require('mongoose');

const adminUser = new mongoose.Schema({
  user:String,
  password: String,
});

const admin = mongoose.model('admin', adminUser);

module.exports = admin;