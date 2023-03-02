const express = require("express");
const {
  GetAll, Get, Update, Create
} = require("../controllers/DomainsCategory");
const router = express.Router();

router.get("/", GetAll);
router.get("/get/:id", Get);
// Uptade category
router.put("/:id", Update);
// Create category
router.post("/", Create);

module.exports = router;
