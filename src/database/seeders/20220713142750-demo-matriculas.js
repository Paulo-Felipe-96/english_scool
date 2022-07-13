"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Matriculas",
      [
        {
          id_estudante: 2,
          id_turma: 1,
          status: "ativo",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Matriculas", null, {});
  },
};
