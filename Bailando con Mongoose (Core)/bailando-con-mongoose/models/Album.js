const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'El título del álbum es obligatorio.'],
    minlength: [6, 'El título debe tener al menos 6 caracteres.'],
    maxlength: [255, 'El título no puede exceder los 255 caracteres.']
  },
  artist: {
    type: String,
    required: [true, 'El nombre del artista es obligatorio.'],
    minlength: [5, 'El nombre del artista debe tener al menos 5 caracteres.'],
    maxlength: [255, 'El nombre del artista no puede exceder los 255 caracteres.']
  },
  releaseYear: {
    type: Number,
    required: [true, 'El año de lanzamiento es obligatorio.'],
    min: [1900, 'El año de lanzamiento debe ser mayor o igual a 1900.'],
    max: [new Date().getFullYear(), 'El año de lanzamiento no puede ser en el futuro.']
  },
  genre: {
    type: String,
    required: [true, 'El género es obligatorio.'],
    enum: ['Rock', 'Metal', 'Pop', 'Punk',  'Hip-Hop', 'Jazz', 'Classical', 'Other'], 
  },
}, {
  timestamps: true
});

const Album = mongoose.model('Album', albumSchema);
module.exports = Album;