import Pessoas from "../models/pessoas.js"

class PeopleController {
  static async listAll(req, res) {
    try {
      const people = await Pessoas.findAll();
      return res.status(200).json(people);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default PeopleController;
