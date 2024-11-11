const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  genre: String,
  album: String
});

module.exports = mongoose.model('Song', songSchema);