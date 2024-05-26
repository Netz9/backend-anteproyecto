const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const usuarioRoutes = require('./routes/UsuarioRoutes');
const loginRoutes = require('./routes/LoginRoutes'); // Descomentado para incluir la ruta de login
const port = 3006;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', usuarioRoutes);
app.use('/api', loginRoutes); // Descomentado para incluir la ruta de login

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
