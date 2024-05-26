const Expositor = require('../models/expositor');

exports.crearExpositor = async (req, res) => {
    const { nombre, apellido, especialidad, id_evento } = req.body;
    try {
      const nuevoExpositor = await Expositor.create({ nombre, apellido, especialidad, id_evento });
      res.status(201).json(nuevoExpositor);
    } catch (error) {
      console.error('Error al crear expositor:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

exports.obtenerExpositores = async (req, res) => {
  try {
    const expositores = await Expositor.findAll();
    res.json(expositores);
  } catch (error) {
    console.error('Error al obtener expositores:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

exports.obtenerExpositorPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const expositor = await Expositor.findByPk(id);
    if (!expositor) {
      return res.status(404).json({ mensaje: 'Expositor no encontrado' });
    }
    res.json(expositor);
  } catch (error) {
    console.error('Error al obtener expositor por ID:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

exports.actualizarExpositor = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, especialidad, id_evento } = req.body;
  try {
    const expositorExistente = await Expositor.findByPk(id);
    if (!expositorExistente) {
      return res.status(404).json({ mensaje: 'Expositor no encontrado' });
    }

    await expositorExistente.update({ nombre, apellido, especialidad, id_evento });
    res.json(expositorExistente);
  } catch (error) {
    console.error('Error al actualizar expositor:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

exports.eliminarExpositor = async (req, res) => {
  const { id } = req.params;
  try {
    const expositor = await Expositor.findByPk(id);
    if (!expositor) {
      return res.status(404).json({ mensaje: 'Expositor no encontrado' });
    }
    await expositor.destroy();
    res.json({ mensaje: 'Expositor eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar expositor:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};
