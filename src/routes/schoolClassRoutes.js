const router = require("express").Router();
const {
  findAllSchoolClasses,
  findAllSchoolClassById,
  findAllSchoolClassByLevelId,
  findAllSchoolClassByTeacherId,
  findAllSchoolClassByStartDate,
  insertSchoolClass,
  updateSchoolClassById,
} = require("../controller/SchoolClassController");

//data inicio / docente / nivel

router
  .get("/turmas", findAllSchoolClasses)
  .get("/turmas/:id", findAllSchoolClassById)
  .get("/turmas/nivel/:id_nivel", findAllSchoolClassByLevelId)
  .get("/turmas/docente/:id_docente", findAllSchoolClassByTeacherId)
  .get("/turmas/data/?data_inicio", findAllSchoolClassByStartDate)
  .post("/turmas", insertSchoolClass)
  .put("/turmas/:id", updateSchoolClassById);
