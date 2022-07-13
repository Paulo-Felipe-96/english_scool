"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Turmas",
      [
        {
          id_docente: 1,
          id_nivel: 1,
          data_inicio: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id_docente: 3,
          id_nivel: 2,
          data_inicio: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id_docente: 5,
          id_nivel: 3,
          data_inicio: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Turmas", null, {});
  },
};
