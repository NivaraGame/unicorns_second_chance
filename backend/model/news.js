const mongoose = require('mongoose');

const schema = new mongoose.Schema({

  id: {
    type: Number,
    unique: true,
    required: true
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  id_device: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  last_connection: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('News', schema);
