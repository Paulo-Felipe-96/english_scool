"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Niveis",
      [
        {
          nivel: "básico",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nivel: "intermediário",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nivel: "avançado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Niveis", null, {});
  },
};
