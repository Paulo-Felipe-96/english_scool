"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Pessoas",
      [
        {
          nome: "Denise Bailey",
          ativo: 0,
          email: "denise.bailey@example.com",
          role: "docente",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Cameron Patterson",
          ativo: 0,
          email: "cameron.patterson@example.com",
          role: "estudante",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Kara Wilson",
          ativo: 1,
          email: "kara.wilson@example.org",
          role: "docente",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "George Reyes",
          ativo: 0,
          email: "george.reyes@example.net",
          role: "estudante",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Troy King",
          ativo: 0,
          email: "troy.king@example.net",
          role: "docente",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Jessica Powers",
          ativo: 1,
          email: "jessica.powers@example.org",
          role: "estudante",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Gabrielle Hunter",
          ativo: 1,
          email: "gabrielle.hunter@example.net",
          role: "docente",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "James Fields",
          ativo: 1,
          email: "james.fields@example.net",
          role: "estudante",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Steven Smith",
          ativo: 1,
          email: "steven.smith@example.com",
          role: "docente",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "John Ballard",
          ativo: 0,
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
