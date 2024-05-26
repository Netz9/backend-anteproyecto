const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');

exports.iniciarSesion = async (req, res) => {
  const { usuario, contrasena } = req.body;
  try {
    // Busca el usuario por su nombre de usuario
    const usuarioEncontrado = await Usuario.findOne({ where: { usuario } });
    if (!usuarioEncontrado) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    // Compara la contraseña proporcionada con la contraseña almacenada
    const contrasenaValida = await bcrypt.compare(contrasena, usuarioEncontrado.contrasena);
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
