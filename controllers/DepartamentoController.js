const Departamento = require('../models/departamento');

exports.obtenerDepartamentosPorFacultad = async (req, res) => {
  const { id_facultad } = req.params;
  try {
    const departamentos = await Departamento.findAll({ where: { id_facultad } });
    res.json(departamentos);
  } catch (error) {
    console.error('Error al obtener departamentos:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};
