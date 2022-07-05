const PersonController = require("../controller/PersonController");
const { Router } = require("express");
const router = Router();
const { findAllPeople } = PersonController; // methods to import with destructuring

router.get("/pessoas", findAllPeople);

module.exports = router;
