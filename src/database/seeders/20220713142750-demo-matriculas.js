"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Matriculas",
      [
        {
          id_estudante: 2,
          id_turma: 1,
          status: "confirmado",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id_estudante: 4,
          id_turma: 2,
          status: "confirmado",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id_estudante: 6,
          id_turma: 3,
          status: "confirmado",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id_estudante: 6,
          id_turma: 3,
          status: "pendente",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id_estudante: 6,
          id_turma: 3,
          status: "cancelado",
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
