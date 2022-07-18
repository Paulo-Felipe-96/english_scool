const router = require("express").Router();
const {
  findAllPeople,
  findAllEnrollments,
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
  restorePerson,
  restoreEnrollment,
} = require("../controller/PersonController");

router
  .get("/pessoas", findAllPeople)
  .get("/pessoas/:id", findPersonById)
  .get("/pessoas/role/:role", findPeopleByRoleName)
  .get("/pessoas/matriculas/todas/", findAllEnrollments)
  .get("/pessoas/matriculas/status/?", findEnrollmentByStatus)
  .get("/pessoas/matriculas/estudante/:id", findEnrollmentByStudantId)
  .get("/pessoas/matriculas/turma/:id", findEnrollmentBySchoolClassId)
  .get("/pessoas/matriculas/:id", findEnrollmentById)
  .post("/pessoas/matriculas", insertEnrollment)
  .put("/pessoas/matriculas/:id", updateEnrollmentById)
  .put("/pessoas/restaurar/:id", restorePerson)
  .put("/pessoas/matriculas/restaurar/:id", restoreEnrollment)
  .post("/pessoas", insertPerson)
  .put("/pessoas/:id", updatePersonById)
  .delete("/pessoas/matriculas/:id", deleteEnrollmentById)
  .delete("/pessoas", deleteManyById)
  .delete("/pessoas/:id", deletePersonById);

module.exports = router;
