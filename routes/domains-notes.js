const express = require("express");
const {
  GetAll, Update, Create, Get
} = require("../controllers/DomainsNote");
const router = express.Router();

router.get("/", GetAll);
router.get("/get/:id", Get);
// Uptade domain
router.put("/:id", Update);
// Create domain
router.post("/", Create);

module.exports = router;
