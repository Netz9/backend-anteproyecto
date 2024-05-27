'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('rol', {
      id_rol: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull: false
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

    // roles por defecto
    await queryInterface.bulkInsert('rol', [
      {
        descripcion: 'administrador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'catedratico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'estudiante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'invitado',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('rol');
  }
};
