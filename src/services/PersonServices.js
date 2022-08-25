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

  async getStudantById(where = {}) {
    return database[this.modelName]
      .scope("studantRole")
      .findOne({ where: { ...where } });
  }

  async updatePerson(data, where = {}) {
    return database[this.modelName]
      .scope("all")
      .update(data, { where: { ...where } });
  }

  async deactivateStudantById(where = {}) {
    return database[this.modelName]
      .scope("studantRole")
      .update({ ativo: false }, { where: { ...where } });
  }

  async deletePerson(where = {}) {
    return database[this.modelName]
      .scope("all")
      .destroy({ where: { ...where } });
  }

  async deleteManyPeople(data) {
    return database[this.modelName]
      .scope("all")
      .destroy({ where: { id: data } });
  }

  async restorePerson(where = {}) {
    return database[this.modelName]
      .scope("all")
      .restore({ where: { ...where } });
  }
}

module.exports = PersonServices;
