const database = require("../models");
const Services = require("./Services");
const { literal } = require("sequelize");

class EnrollmentServices extends Services {
  constructor() {
    super("Matriculas");
  }

  async getAndCountEnrollentsBySchoolClassId(where = {}) {
    return database[this.modelName].scope("confirmedStatus").findAndCountAll({
      where: {
        ...where,
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

  async cancelEnrollmentsAfterDeactivateStudant(id) {
    return database.sequelize.transaction(async (transaction) => {
      await database[this.modelName].update(
        { status: "cancelado" },
        { where: { id_estudante: id } },
        { transaction: transaction }
      );
    });
  }

  async restoreManyEnrollmentsById(where) {
    return database.sequelize.transaction(async (transaction) => {
      await database[this.modelName].restore(where, {
        transaction: transaction,
      });
    });
  }
}

module.exports = EnrollmentServices;
