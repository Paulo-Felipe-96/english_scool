const PersonController = require("../controller/PersonController");
const { Router } = require("express");
const router = Router();
const {
  findAllPeople,
  findPeopleByRoleName,
  findPersonById,
  insertPerson,
  updatePersonById,
  deletePersonById,
} = PersonController; // destructuring

router
  .get("/pessoas", findAllPeople)
  .get("/pessoas/:id", findPersonById)
  .get("/pessoas/role/:role", findPeopleByRoleName)
  .post("/pessoas", insertPerson)
  .put("/pessoas/:id", updatePersonById)
  .delete("/pessoas/:id", deletePersonById);

module.exports = router;
