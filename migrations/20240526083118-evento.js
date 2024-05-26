'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('evento', {
      id_evento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      fecha_inicio: {
        type: Sequelize.DATE,
        allowNull: true
      },
      fecha_fin: {
        type: Sequelize.DATE,
        allowNull: true
      },
      id_departamento: {
        type: Sequelize.INTEGER,
        references: {
          model: 'departamento',
          key: 'id_departamento'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      id_lugar: {
        type: Sequelize.INTEGER,
        references: {
          model: 'lugar',
          key: 'id_lugar'
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
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('evento');
  }
};
