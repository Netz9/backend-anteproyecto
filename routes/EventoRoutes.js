const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/EventoController');

// Ruta para crear un nuevo evento
router.post('/eventos', eventoController.crearEvento);

// Ruta para obtener todos los eventos
router.get('/eventos', eventoController.obtenerEventos);

module.exports = router;
