const router = require("express").Router();
const {
  findAllPeople,
  findPersonById,
  findPeopleByRoleName,
  insertPerson,
  updatePersonById,
  findEnrollmentById,
  findEnrollmentByStatus,
  findEnrollmentByStudantId,
  findEnrollmentBySchoolClassId,
  insertEnrollment,
  updateEnrollmentById,
  deletePersonById,
  deleteManyById,
  deleteEnrollmentById,
} = require("../controller/PersonController");

router
  .get("/pessoas", findAllPeople)
  .get("/pessoas/:id", findPersonById)
  .get("/pessoas/role/:role", findPeopleByRoleName)
  .get("/pessoas/matriculas/status/?", findEnrollmentByStatus)
  .get("/pessoas/matriculas/estudante/:id", findEnrollmentByStudantId)
  .get("/pessoas/matriculas/turma/:id", findEnrollmentBySchoolClassId)
  .get("/pessoas/matriculas/:id", findEnrollmentById)
  .post("/pessoas/matriculas", insertEnrollment)
  .put("/pessoas/matriculas/:id", updateEnrollmentById)
  .post("/pessoas", insertPerson)
  .put("/pessoas/:id", updatePersonById)
  .delete("/pessoas/matriculas/:id", deleteEnrollmentById)
  .delete("/pessoas", deleteManyById)
  .delete("/pessoas/:id", deletePersonById);

module.exports = router;
