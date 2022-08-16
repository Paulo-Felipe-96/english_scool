const database = require("../models");

class Services {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async getAllRecords() {
    return database[this.modelName].findAll();
  }

  async getOneRecord(id) {}

  async createRecord(data) {}

  async updateRecord(data, any) {}

  async deleteRecord() {}
}

module.exports = Services;
