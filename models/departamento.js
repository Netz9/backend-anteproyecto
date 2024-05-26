const { DataTypes } = require('sequelize');
const sequelize = require('../sequelizeConfig').sequelize;
const Facultad = require('./facultad');

const Departamento = sequelize.define('Departamento', {
  id_departamento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id_facultad: {
    type: DataTypes.INTEGER,
    references: {
      model: Facultad,
      key: 'id_facultad'
    }
  }
}, {
  tableName: 'departamento',
  timestamps: true
});

Departamento.belongsTo(Facultad, { foreignKey: 'id_facultad' });

module.exports = Departamento;
