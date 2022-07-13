"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Matriculas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_estudante: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Pessoas", key: "id" },
      },
      id_turma: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Turmas", key: "id" },
      },
      status: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Matriculas");
  },
};
