const { DataTypes } = require('sequelize');
const sequelize = require('../sequelizeConfig').sequelize;
const Facultad = require('./facultad');
const Departamento = require('./departamento');

const Evento = sequelize.define('Evento', {
  id_evento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  fecha_inicio: {
    type: DataTypes.DATE,
    allowNull: true
  },
  fecha_fin: {
    type: DataTypes.DATE,
    allowNull: true
  },
  estado: {
    type: DataTypes.ENUM('Activo', 'Inactivo'),
    allowNull: false,
    defaultValue: 'Activo'
  },
  id_facultad: {
    type: DataTypes.INTEGER,
    references: {
      model: Facultad,
      key: 'id_facultad'
    }
  },
  id_departamento: {
    type: DataTypes.INTEGER,
    references: {
      model: Departamento,
      key: 'id_departamento'
    }
  }
}, {
  tableName: 'evento',
  timestamps: true
});

Evento.belongsTo(Facultad, { foreignKey: 'id_facultad' });
Evento.belongsTo(Departamento, { foreignKey: 'id_departamento' });

module.exports = Evento;
