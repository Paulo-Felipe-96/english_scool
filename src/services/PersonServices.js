const Services = require("./Services");
const database = require("../models");

class PersonServices extends Services {
  constructor() {
    super("Pessoas");
  }

  async getActivePeople(where = {}) {
    return database[this.modelName].findAll({ where: { ...where } });
  }

  async getAllPeople(where = {}) {
    return database[this.modelName]
      .scope("all")
      .findAll({ where: { ...where } });
  }

  async getStudantById(id) {
    return database[this.modelName]
      .scope("studantRole")
      .findOne({ where: { id } });
  }

  async updatePerson(data, id) {
    return database[this.modelName]
      .scope("all")
      .update(data, { where: { id } });
  }

  async deactivateStudantById(id, transaction) {
    return database[this.modelName]
      .scope("studantRole")
      .update(
        { ativo: false },
        { where: { id } },
        { transaction: transaction }
      );
  }

  async deletePerson(id) {
    return database[this.modelName].scope("all").destroy({ where: { id } });
  }

  async deleteManyPeople(data) {
    return database[this.modelName]
      .scope("all")
      .destroy({ where: { id: data } });
  }

  async restorePerson(id) {
    return database[this.modelName].scope("all").restore({ where: { id } });
  }
}

module.exports = PersonServices;
