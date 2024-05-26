'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('facultad', {
      id_facultad: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
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

    await queryInterface.bulkInsert('facultad', [
      { nombre: 'DEPARTAMENTO DE PEDAGOGÍA Y CIENCIAS DE LA EDUCACIÓN', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'DEPARTAMENTO DE DERECHO', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'FACULTAD DE CIENCIAS ECONÓMICAS', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'FACULTAD DE ARQUITECTURA', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'DEPARTAMENTO DE CIENCIAS DE LA COMUNICACIÓN SOCIAL', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'FACULTAD DE INGENIERÍA', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'FACULTAD DE ODONTOLOGÍA', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'FACULTAD DE MEDICINA', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('facultad');
  }
};
