// models/Phone.js
const mongoose = require('mongoose');

const PhoneSchema = new mongoose.Schema({
  name: String,
  image: String,
  storage: String,
  ram: String,
  price: Number,
  network: {
    technology: String
  },
  launch: {
    announced: String,
    status: String
  },
  body: {
    dimensions: String
  }
});

module.exports = mongoose.model('Phone', PhoneSchema);