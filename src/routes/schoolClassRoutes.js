const router = require("express").Router();
const {
  findAllSchoolClasses,
  findSchoolClassById,
  findSchoolClassesByLevelId,
  findSchoolClassesByTeacherId,
  insertSchoolClass,
  updateSchoolClassById,
  deleteSchoolClassById,
  restoreSchoolClass,
} = require("../controller/SchoolClassController");

router
  .get("/turmas/docente/:id_docente", findSchoolClassesByTeacherId)
  .get("/turmas/nivel/:id_nivel", findSchoolClassesByLevelId)
  .get("/turmas/?", findAllSchoolClasses)
  .get("/turma/:id", findSchoolClassById)
  .post("/turmas", insertSchoolClass)
  .put("/turmas/restaurar/:id", restoreSchoolClass)
  .put("/turmas/:id", updateSchoolClassById)
  .delete("/turmas/:id", deleteSchoolClassById);

module.exports = router;
