const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  price: Number
});

module.exports = mongoose.model('Property', propertySchema);
