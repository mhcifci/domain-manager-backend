const express = require("express");
const { GetAll, Get, Update, Create } = require("../controllers/User");
const router = express.Router();

router.get("/", GetAll);
// Get single user
router.get("/get/:id", Get);

// Uptade user
router.put("/:id", Update);
// Create user
router.post("/", Create);

module.exports = router;
