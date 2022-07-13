"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Pessoas",
      [
        {
          nome: "Denise Bailey",
          ativo: false,
          email: "denise.bailey@example.com",
          role: "docente",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Cameron Patterson",
          ativo: false,
          email: "cameron.patterson@example.com",
          role: "estudante",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Kara Wilson",
          ativo: true,
          email: "kara.wilson@example.org",
          role: "docente",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "George Reyes",
          ativo: false,
          email: "george.reyes@example.net",
          role: "estudante",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Troy King",
          ativo: false,
          email: "troy.king@example.net",
          role: "docente",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Jessica Powers",
          ativo: true,
          email: "jessica.powers@example.org",
          role: "estudante",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Gabrielle Hunter",
          ativo: true,
          email: "gabrielle.hunter@example.net",
          role: "docente",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "James Fields",
          ativo: true,
          email: "james.fields@example.net",
          role: "estudante",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Steven Smith",
          ativo: true,
          email: "steven.smith@example.com",
          role: "docente",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "John Ballard",
          ativo: false,
          email: "john.ballard@example.org",
          role: "estudante",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Pessoas", null, {});
  },
};
