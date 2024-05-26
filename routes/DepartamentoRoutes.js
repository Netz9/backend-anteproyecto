const express = require('express');
const router = express.Router();
const departamentoController = require('../controllers/DepartamentoController');

// Ruta para obtener departamentos por facultad
router.get('/departamentos/:id_facultad', departamentoController.obtenerDepartamentosPorFacultad);

module.exports = router;
