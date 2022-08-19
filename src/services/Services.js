const database = require("../models");

class Services {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async getAllRecords(where = {}) {
    return database[this.modelName].findAll({ where: { ...where } });
  }

  async getAllRecordsRangeDate(where) {
    return database[this.modelName].findAll(where);
  }

  async getOneRecord(where = {}) {
    return database[this.modelName].findOne({ where: { ...where } });
  }

  async createRecord(data) {
    return database[this.modelName].create(data);
  }

  async updateRecord(data, id) {
    return database[this.modelName].update(data, { where: { id } });
  }

  async deleteRecord(id) {
    return database[this.modelName].destroy({ where: { id } });
  }

  async deleteManyRecordsById(data) {
    return database[this.modelName].destroy({
      where: { id: data },
    });
  }

  async restoreRecord(id) {
    return database[this.modelName].restore({ where: { id } });
  }
}

module.exports = Services;
