const express = require("express");
const {
  GetAll,
  Update,
  Create,
  Get,
  GetAllUnusedDomains,
} = require("../controllers/Domains");
const router = express.Router();

router.get("/", GetAll);
router.get("/get/:id", Get);
router.put("/:id", Update);
router.post("/", Create);

// Unused views
router.get("/unused", GetAllUnusedDomains);

module.exports = router;
