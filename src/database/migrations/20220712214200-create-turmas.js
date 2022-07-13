"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Turmas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_docente: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Pessoas", key: "id" },
      },
      id_nivel: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Niveis", key: "id" },
      },
      data_inicio: {
        type: Sequelize.DATEONLY,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Turmas");
  },
};
