const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const Sequelize = require('sequelize');
const databaseConfig = require('./config/database');
const usuarioRoutes = require('./routes/UsuarioRoutes');
const loginRoutes = require('./routes/LoginRoutes');
const sequelize = new Sequelize(databaseConfig.development);
const port = 3006; 

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', usuarioRoutes);
app.use('/api', loginRoutes);


// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});