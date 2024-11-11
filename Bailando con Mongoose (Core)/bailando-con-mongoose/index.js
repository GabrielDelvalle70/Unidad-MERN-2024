require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware para manejar JSON
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.log(err));

// Levanta el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(process.env.MONGO_URI);
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

//Utiliza las rutas recien creadas
const albumRoutes = require('./routes/albumRoutes');
app.use('/api', albumRoutes);