const express = require('express');
const router = express.Router();
const facultadController = require('../controllers/FacultadController');

// Ruta para obtener todas las facultades
router.get('/facultades', facultadController.obtenerFacultades);

module.exports = router;
