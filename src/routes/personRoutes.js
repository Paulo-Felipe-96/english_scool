const router = require("express").Router();
const {
  findAllPeople,
  findPersonById,
  findPeopleByRoleName,
  insertPerson,
  updatePersonById,
  deletePersonById,
  deleteManyById,
} = require("../controller/PersonController");

router
  .get("/pessoas", findAllPeople)
  .get("/pessoas/:id", findPersonById)
  .get("/pessoas/role/:role", findPeopleByRoleName)
  .post("/pessoas", insertPerson)
  .put("/pessoas/:id", updatePersonById)
  .delete("/pessoas", deleteManyById)
  .delete("/pessoas/:id", deletePersonById);

module.exports = router;
