"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "pessoas",
      [
        {
          nome: "Denise Bailey",
          ativo: 0,
          email: "toddking@example.com",
          role: "docente",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Cameron Patterson",
          ativo: 0,
          email: "kathryn08@example.com",
          role: "aluno",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Kara Wilson",
          ativo: 1,
          email: "megan36@example.org",
          role: "docente",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "George Reyes",
          ativo: 0,
          email: "laurensandoval@example.net",
          role: "aluno",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Troy King",
          ativo: 0,
          email: "jackrichardson@example.net",
          role: "docente",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Jessica Powers",
          ativo: 1,
          email: "fmarsh@example.org",
          role: "aluno",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Gabrielle Hunter",
          ativo: 1,
          email: "holmeskaitlin@example.net",
          role: "docente",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "James Fields",
          ativo: 1,
          email: "holmessamantha@example.net",
          role: "aluno",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Steven Smith",
          ativo: 1,
          email: "marquezmichael@example.com",
          role: "docente",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "John Ballard",
          ativo: 0,
          email: "hernandezkyle@example.org",
          role: "aluno",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("pessoas", null, {});
  },
};
