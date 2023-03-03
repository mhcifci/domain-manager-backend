const express = require("express");
const {
  GetAll,
  Update,
  Create,
  Get,
  GetAllUnusedDomains,
} = require("../controllers/Domains");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/", authMiddleware, GetAll);
router.get("/get/:id", authMiddleware, Get);
router.put("/:id", authMiddleware, Update);
router.post("/", authMiddleware, Create);

// Unused views
router.get("/unused", GetAllUnusedDomains);

// Check is banned?
router.get("/check", GetAllUnusedDomains);

module.exports = router;
