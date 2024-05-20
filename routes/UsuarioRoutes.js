// En routes/usuarioRoutes.js
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/UsuarioController');

// Rutas para usuarios
router.get('/usuarios', usuarioController.obtenerUsuarios);
router.post('/usuarios', usuarioController.crearUsuario);
router.get('/usuarios/:id', usuarioController.obtenerUsuarioPorId);
router.put('/usuarios/:id', usuarioController.actualizarUsuario);
router.delete('/usuarios/:id', usuarioController.eliminarUsuario);

module.exports = router;
