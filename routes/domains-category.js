const express = require("express");
const {
  GetAll,
  Get,
  Update,
  Create,
} = require("../controllers/DomainsCategory");
const router = express.Router();

router.get("/", GetAll);
router.get("/get/:id", Get);
router.put("/:id", Update);
router.post("/", Create);

module.exports = router;
