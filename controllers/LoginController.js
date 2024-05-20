const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');

exports.iniciarSesion = async (req, res) => {
    const { username, password } = req.body;
    try {
      // Busca el usuario por su nombre de usuario
      const usuario = await Usuario.findOne({ where: { username } });
      if (!usuario) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
      
      // Compara la contraseña proporcionada con la contraseña almacenada
      const contrasenaValida = await bcrypt.compare(password, usuario.password);
      if (!contrasenaValida) {
        return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
      }
  
      // Si la contraseña es válida, se inicia sesión exitosamente
      res.status(200).json({ mensaje: 'Inicio de sesión exitoso' });
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  };