const Facultad = require('../models/facultad');

exports.obtenerFacultades = async (req, res) => {
  try {
    const facultades = await Facultad.findAll();
    res.json(facultades);
  } catch (error) {
    console.error('Error al obtener facultades:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};
