const router = require("express").Router();
const {
  listAllLevels,
  findLevelById,
  findLevelByDescription,
  updateLevelById,
  insertLevel,
  deleteLevelById,
  restoreLevelById,
} = require("../controller/LevelController");

router
  .get("/niveis/descricao/?", findLevelByDescription)
  .get("/nivel/:id", findLevelById)
  .get("/niveis", listAllLevels)
  .post("/niveis", insertLevel)
  .put("/niveis/:id", updateLevelById)
  .post("/niveis/restaurar/:id", restoreLevelById)
  .delete("/niveis/:id", deleteLevelById);

module.exports = router;
