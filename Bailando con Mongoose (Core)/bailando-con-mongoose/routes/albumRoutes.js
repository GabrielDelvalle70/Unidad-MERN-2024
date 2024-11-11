const express = require('express');
const Album = require('../models/Album');
const router = express.Router();

// Agregar un nuevo álbum (POST)
router.post('/albums', async (req, res) => {
  try {
    const album = new Album(req.body);
    await album.save();
    res.status(201).send(album);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Recuperar todas las canciones (GET)
router.get('/albums', async (req, res) => {
  try {
    const albums = await Album.find();
    res.send(albums);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Recuperar una sola canción por ID (GET)
router.get('/albums/:id', async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);
    if (!album) {
      return res.status(404).send('Álbum no encontrado');
    }
    res.send(album);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Editar una canción (PATCH)
router.patch('/albums/:id', async (req, res) => {
  try {
    const album = await Album.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!album) {
      return res.status(404).send('Álbum no encontrado');
    }
    res.send(album);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Eliminar una canción (DELETE)
router.delete('/albums/:id', async (req, res) => {
  try {
    const album = await Album.findByIdAndDelete(req.params.id);
    if (!album) {
      return res.status(404).send('Álbum no encontrado');
    }
    res.send('Álbum eliminado');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;