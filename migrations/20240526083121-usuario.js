'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuario', {
      id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      usuario: {
        type: Sequelize.STRING,
        allowNull: false
      },
      contrasena: {
        type: Sequelize.STRING,
        allowNull: false
      },
      estado: {
        type: Sequelize.ENUM('Activo', 'Inactivo'), 
        allowNull: false,
        defaultValue: 'Activo' 
      },
      id_rol: {
        type: Sequelize.INTEGER,
        references: {
          model: 'rol',
          key: 'id_rol'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });

    // usuario por defecto
    await queryInterface.bulkInsert('usuario', [{
      usuario: 'admin',
      contrasena: 'admin',
      estado: 'Activo',
      id_rol: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuario');
  }
};
