const database = require("../models");
const Services = require("./Services");
const { literal } = require("sequelize");

class EnrollmentServices extends Services {
  constructor() {
    super("Matriculas");
  }

  async getAndCountEnrollentsBySchoolClassId(id_turma) {
    return database[this.modelName].scope("confirmedStatus").findAndCountAll({
      where: {
        id_turma,
      },
    });
  }

  async getCrowdedSchoolClasses() {
    const crowded = 5;
    const agregation = {
      attributes: ["id_turma"],
      group: ["id_turma"],
      having: literal(`count(id_turma) >= ${crowded}`),
    };

    return database[this.modelName]
      .scope("confirmedStatus")
      .findAndCountAll(agregation);
  }

  async cancelEnrollmentsAfterDeactivateStudant(id, transaction) {
    return database[this.modelName].update(
      { status: "cancelado" },
      { where: { id_estudante: id } },
      { transaction: transaction }
    );
  }

  async restoreManyEnrollmentsById(where, transaction) {
    return database[this.modelName].restore(where, { transaction });
  }
}

module.exports = EnrollmentServices;
