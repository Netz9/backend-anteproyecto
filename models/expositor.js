const { DataTypes } = require('sequelize');
const sequelize = require('../sequelizeConfig').sequelize;
const Evento = require('./evento');

const Expositor = sequelize.define('Expositor', {
  id_expositor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  especialidad: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id_evento: {
    type: DataTypes.INTEGER,
    references: {
      model: Evento,
      key: 'id_evento'
    }
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'expositor',
  timestamps: true
});

Expositor.belongsTo(Evento, { foreignKey: 'id_evento' });

module.exports = Expositor;
