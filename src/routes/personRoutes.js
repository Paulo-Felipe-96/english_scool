const router = require("express").Router();
const {
  findActivePeople,
  findAllPeople,
  findAllEnrollments,
  findPersonById,
  findPeopleByRoleName,
  insertPerson,
  updatePersonById,
  findEnrollmentById,
  findEnrollmentByStatus,
  findEnrollmentByStudantId,
  findAndCountEnrollmentsBySchoolClassId,
  insertEnrollment,
  updateEnrollmentById,
  deletePersonById,
  deleteManyById,
  deleteEnrollmentById,
  restorePerson,
  restoreEnrollmentsById,
  deleteManyEnrollmentsById,
  findCrowdedSchoolClasses,
  cancelEnrollmentsAndDeactivateStudantById,
} = require("../controller/PersonController");

router
  .get("/pessoas", findAllPeople)
  .get("/pessoa/:id", findPersonById)
  .get("/pessoas/ativas", findActivePeople)
  .get("/pessoas/role/:role", findPeopleByRoleName)
  .get("/pessoas/matriculas/todas/", findAllEnrollments)
  .get("/pessoas/matriculas/cheias/", findCrowdedSchoolClasses)
  .get("/pessoas/matriculas/status/?", findEnrollmentByStatus)
  .get("/pessoas/matriculas/estudante/:id", findEnrollmentByStudantId)
  .get(
    "/pessoas/matriculas/turma/:id_turma/quantidade",
    findAndCountEnrollmentsBySchoolClassId
  )
  .get("/pessoas/matriculas/:id", findEnrollmentById)
  .post("/pessoas/:id/cancelar", cancelEnrollmentsAndDeactivateStudantById)
  .post("/pessoas/matriculas", insertEnrollment)
  .post("/pessoas/matriculas/restaurar/?", restoreEnrollmentsById)
  .post("/pessoas", insertPerson)
  .post("/pessoas/restaurar/:id", restorePerson)
  .put("/pessoas/matriculas/:id", updateEnrollmentById)
  .put("/pessoas/:id", updatePersonById)
  .delete("/pessoas/matriculas", deleteManyEnrollmentsById)
  .delete("/pessoas/matriculas/:id", deleteEnrollmentById)
  .delete("/pessoas", deleteManyById)
  .delete("/pessoas/:id", deletePersonById);

module.exports = router;
