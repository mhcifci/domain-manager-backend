const express = require("express");
const { GetAll, Get, Update, Create } = require("../controllers/DomainsHosts");
const router = express.Router();

router.get("/", GetAll);
router.get("/get/:id", Get);
// Uptade hosts
router.put("/:id", Update);
// Create hosts
router.post("/", Create);

module.exports = router;
