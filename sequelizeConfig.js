const { Sequelize } = require('sequelize');
const databaseConfig = require('./config/database');

const { username, password, database, host, dialect } = databaseConfig.development;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

async function verificarConexion() {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente con la base de datos.');
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
}

module.exports = {
  sequelize,
  verificarConexion
};
