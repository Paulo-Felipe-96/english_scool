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
}

module.exports = PersonServices;
