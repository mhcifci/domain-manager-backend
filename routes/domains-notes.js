const express = require("express");
const { GetAll, Update, Create, Get } = require("../controllers/DomainsNote");
const router = express.Router();

router.get("/", GetAll);
router.get("/get/:id", Get);
// Uptade
router.put("/:id", Update);
// Create
router.post("/", Create);

module.exports = router;
