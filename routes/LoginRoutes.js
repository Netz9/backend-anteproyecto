// En routes/loginRoutes.js
const express = require('express');
const router = express.Router();
const loginController = require('../controllers/LoginController');

// Ruta para iniciar sesión
router.post('/login', loginController.iniciarSesion);

module.exports = router;
