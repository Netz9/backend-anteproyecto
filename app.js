const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const usuarioRoutes = require('./routes/UsuarioRoutes');
const loginRoutes = require('./routes/LoginRoutes');
const facultadRoutes = require('./routes/FacultadRoutes');
const departamentoRoutes = require('./routes/DepartamentoRoutes');
const eventoRoutes = require('./routes/EventoRoutes');
const expositorRoutes = require('./routes/ExpositorRoutes');
const port = 3006;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', usuarioRoutes);
app.use('/api', loginRoutes);
app.use('/api', facultadRoutes);
app.use('/api', departamentoRoutes);
app.use('/api', eventoRoutes);
app.use('/api', expositorRoutes);

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
