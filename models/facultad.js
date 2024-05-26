const { DataTypes } = require('sequelize');
const sequelize = require('../sequelizeConfig').sequelize;

const Facultad = sequelize.define('Facultad', {
  id_facultad: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'facultad',
  timestamps: true
});

module.exports = Facultad;
