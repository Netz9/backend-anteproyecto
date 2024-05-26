const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');

exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

exports.crearUsuario = async (req, res) => {
  const { usuario, contrasena, id_rol } = req.body;

  if (!contrasena) {
    return res.status(400).json({ mensaje: 'Se requiere una contraseña' });
  }

  try {
    const hashedPassword = await bcrypt.hash(contrasena, 10);
    const nuevoUsuario = await Usuario.create({ usuario, contrasena: hashedPassword, id_rol });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(400).json({ mensaje: 'Error al crear usuario' });
  }
};

exports.obtenerUsuarioPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    console.error('Error al obtener usuario por ID:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

exports.actualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { usuario, contrasena, id_rol, estado } = req.body;
  try {
    const usuarioExistente = await Usuario.findByPk(id);
    if (!usuarioExistente) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    const updatedData = { usuario, id_rol, estado };
    if (contrasena) {
      updatedData.contrasena = await bcrypt.hash(contrasena, 10);
    }

    await usuarioExistente.update(updatedData);
    res.json(usuarioExistente);
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(400).json({ mensaje: 'Error al actualizar usuario' });
  }
};

exports.eliminarUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    await usuario.destroy();
    res.json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};
