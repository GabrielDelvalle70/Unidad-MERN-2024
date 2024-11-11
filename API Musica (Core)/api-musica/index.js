const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

// Genera un objeto Canción
function crearCancion() {
    return {
        id: faker.datatype.uuid,
        titulo: faker.music.songName(),
        artista: faker.music.artist(),
        album: faker.music.genre(),
        duracion: `${faker.number.int({ min: 2, max: 5 })}:${faker.number.int({ min: 0, max: 59 })}`,
        genero: faker.music.genre(),
        fechaLanzamiento: faker.date.past(10).toISOString().split('T')[0]
    };
}

// Genera una lista de reproducción con canciones
function crearPlaylist(numCanciones = 5) {
    let canciones = [];
    for (let i = 0; i < numCanciones; i++) {
        canciones.push(crearCancion());
    }
    return {
        idPlaylist: faker.datatype.uuid,
        nombre: faker.lorem.words(3),
        descripcion: faker.lorem.sentence(),
        canciones: canciones,
        creador: faker.name.firstName(),
        fechaCreacion: faker.date.past(5).toISOString().split('T')[0]
    };
}

// Ruta para generar una canción
app.get('/cancion', (req, res) => {
    const cancion = crearCancion();
    res.json(cancion);
});

// Ruta para generar una playlist
app.get('/playlist', (req, res) => {
    const numCanciones = req.query.numCanciones ? parseInt(req.query.numCanciones) : 5;
    const playlist = crearPlaylist(numCanciones);
    res.json(playlist);
});


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});