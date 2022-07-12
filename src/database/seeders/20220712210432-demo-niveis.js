"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Niveis",
      [
        {
          descricao: "básico",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          descricao: "intermediário",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          descricao: "avançado",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Niveis", null, {});
  },
};
