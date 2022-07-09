"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Pessoas",
      [
        {
          nome: "Denise Bailey",
          ativo: 0,
          email: "Denise.Bailey@example.com",
          role: "docente",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Cameron Patterson",
          ativo: 0,
          email: "Cameron.Patterson@example.com",
          role: "estudante",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Kara Wilson",
          ativo: 1,
          email: "Kara.Wilson@example.org",
          role: "docente",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "George Reyes",
          ativo: 0,
          email: "George.Reyes@example.net",
          role: "estudante",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Troy King",
          ativo: 0,
          email: "Troy.King@example.net",
          role: "docente",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Jessica Powers",
          ativo: 1,
          email: "Jessica.Powers@example.org",
          role: "estudante",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Gabrielle Hunter",
          ativo: 1,
          email: "Gabrielle.Hunter@example.net",
          role: "docente",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "James Fields",
          ativo: 1,
          email: "James.Fields@example.net",
          role: "estudante",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Steven Smith",
          ativo: 1,
          email: "Steven.Smith@example.com",
          role: "docente",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "John Ballard",
          ativo: 0,
          email: "John.Ballard@example.org",
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
