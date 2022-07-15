const router = require("express").Router();
const {
  findAllSchoolClasses,
  findSchoolClassById,
  findSchoolClassesByLevelId,
  findSchoolClassesByTeacherId,
  findSchoolClassesByStartDate,
  insertSchoolClass,
  updateSchoolClassById,
} = require("../controller/SchoolClassController");

router
  .get("/turmas/data_inicio/?", findSchoolClassesByStartDate)
  .get("/turmas/docente/:id_docente", findSchoolClassesByTeacherId)
  .get("/turmas/nivel/:id_nivel", findSchoolClassesByLevelId)
  .get("/turmas/:id", findSchoolClassById)
  .get("/turmas", findAllSchoolClasses)
  .post("/turmas", insertSchoolClass)
  .put("/turmas/:id", updateSchoolClassById);

module.exports = router;
