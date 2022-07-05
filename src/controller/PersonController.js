const db = require("../models");

class PersonController {
  static async findAllPeople(req, res) {
    try {
      const people = await db.Pessoas.findAll();
      return res.status(200).json(people);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = PersonController;
