const mongoose = require('mongoose');

const SpecificationSchema = new mongoose.Schema({
  category: String,
  title: String,
  xiaomi: String,
  iphone: String


}, { collection: 'specifications' });

module.exports = mongoose.model('Specification', SpecificationSchema);
