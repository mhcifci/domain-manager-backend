const express = require("express");
const { GetAll, Update, Create, Get } = require("../controllers/Domains");
const router = express.Router();

// Get all domains
router.get("/", GetAll);
// Get single domain
router.get("/:id", Get);

// Uptade domain
router.put("/:id", Update);
// Create domain
router.post("/", Create);

module.exports = router;
