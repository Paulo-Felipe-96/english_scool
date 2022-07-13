const router = require("express").Router();
const {
  listAllLevels,
  findLevelById,
  findLevelByDescription,
  updateLevelById,
  insertLevel,
} = require("../controller/LevelController");

router
  .get("/niveis/descricao/:descricao", findLevelByDescription)
  .get("/niveis/:id", findLevelById)
  .get("/niveis", listAllLevels)
  .post("/niveis", insertLevel)
  .put("/niveis/:id", updateLevelById);

module.exports = router;
