'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('departamento', {
      id_departamento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_facultad: {
        type: Sequelize.INTEGER,
        references: {
          model: 'facultad',
          key: 'id_facultad'
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

    await queryInterface.bulkInsert('departamento', [
      // DEPARTAMENTO DE PEDAGOGÍA Y CIENCIAS DE LA EDUCACIÓN
      { nombre: 'LICENCIATURA EN PSICOLOGÍA', id_facultad: 1, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'LICENCIATURA EN PSICOLOGÍA CLÍNICA', id_facultad: 1, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'PEM EN INGLÉS', id_facultad: 1, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'PROFESORADO EN EDUCACIÓN PRIMARIA', id_facultad: 1, createdAt: new Date(), updatedAt: new Date() },
      // DEPARTAMENTO DE DERECHO
      { nombre: 'Licenciatura en Ciencias Jurídicas y Sociales, Abogado y Notario', id_facultad: 2, createdAt: new Date(), updatedAt: new Date() },
      // FACULTAD DE CIENCIAS ECONÓMICAS
      { nombre: 'TÉCNICO EN ASESORÍA TRIBUTARIA Y CONTABLE', id_facultad: 3, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'LICENCIATURA EN INFORMÁTICA Y ADMINISTRACIÓN DE EMPRESAS', id_facultad: 3, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'LICENCIATURA EN MERCADOTECNIA Y PUBLICIDAD', id_facultad: 3, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'LICENCIATURA EN ADMINISTRACIÓN DE EMPRESAS', id_facultad: 3, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'LICENCIATURA EN COMERCIO INTERNACIONAL', id_facultad: 3, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'LICENCIATURA EN CONTADURÍA PÚBLICA', id_facultad: 3, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'MAESTRÍA EN MARKETING DIGITAL Y COMERCIO ELECTRÓNICO', id_facultad: 3, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'MAESTRÍA EN ADMINISTRACIÓN DE EMPRESAS CON ESPECIALIDADES', id_facultad: 3, createdAt: new Date(), updatedAt: new Date() },
      // FACULTAD DE ARQUITECTURA
      { nombre: 'Licenciatura en Arquitectura', id_facultad: 4, createdAt: new Date(), updatedAt: new Date() },
      // DEPARTAMENTO DE CIENCIAS DE LA COMUNICACIÓN SOCIAL
      { nombre: 'LICENCIATURA EN CIENCIAS DE LA COMUNICACIÓN SOCIAL', id_facultad: 5, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'LICIENCIATURA EN PRODUCCIÓN AUDIOVISUAL Y ARTES CINEMATOGRÁFICAS', id_facultad: 5, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'LICENCIATURA EN PUBLICIDAD CON ESPECIALIDAD EN DISEÑO GRÁFICO', id_facultad: 5, createdAt: new Date(), updatedAt: new Date() },
      // FACULTAD DE INGENIERÍA
      { nombre: 'TÉCNICO EN DESARROLLO DE SOFTWARE', id_facultad: 6, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'INGENIERÍA EN ELECTRÓNICA', id_facultad: 6, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'INGENIERÍA EN TELECOMUNICACIONES', id_facultad: 6, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'INGENIERÍA EN SISTEMAS', id_facultad: 6, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'INGENIERÍA CIVIL', id_facultad: 6, createdAt: new Date(), updatedAt: new Date() },
      // FACULTAD DE ODONTOLOGÍA
      { nombre: 'TÉCNICO EN LABORATORIO DENTAL', id_facultad: 7, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'LICENCIATURA EN ODONTOLOGÍA', id_facultad: 7, createdAt: new Date(), updatedAt: new Date() },
      // FACULTAD DE MEDICINA
      { nombre: 'LICENCIATURA EN MEDICINA Y CIRUGÍA', id_facultad: 8, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'LICENCIATURA EN NUTRICIÓN', id_facultad: 8, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'LICENCIATURA EN PRODUCCIÓN DE BIO IMÁGENES', id_facultad: 8, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'LICENCIATURA EN PRODUCCIÓN DE BIO IMÁGENES', id_facultad: 8, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('departamento');
  }
};
