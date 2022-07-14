const db = require("../models");

class SchoolClassController {
  //get
  static async findAllSchoolClasses(req, res) {
    try {
      const schoolClasses = db.Turmas.findAll();
      res.status(200).json(schoolClasses);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
  // findAllSchoolClassById
  // findAllSchoolClassByLevelId
  // findAllSchoolClassByTeacherId
  // findAllSchoolClassByStartDate
  // insertSchoolClass
  // updateSchoolClassById
}

module.exports = SchoolClassController;
