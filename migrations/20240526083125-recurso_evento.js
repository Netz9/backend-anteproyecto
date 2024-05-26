'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('recurso_evento', {
      id_recurso: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'recurso',
          key: 'id_recurso'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_evento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'evento',
          key: 'id_evento'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('recurso_evento');
  }
};
