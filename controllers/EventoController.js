const Evento = require('../models/evento');

exports.crearEvento = async (req, res) => {
  const { nombre, descripcion, fecha_inicio, fecha_fin, id_facultad, id_departamento } = req.body;
  try {
    const nuevoEvento = await Evento.create({ nombre, descripcion, fecha_inicio, fecha_fin, id_facultad, id_departamento });
    res.status(201).json(nuevoEvento);
  } catch (error) {
    console.error('Error al crear evento:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

exports.obtenerEventos = async (req, res) => {
  try {
    const eventos = await Evento.findAll();
    res.json(eventos);
  } catch (error) {
    console.error('Error al obtener eventos:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};
