const express = require("express");
const {
  GetAll,
  Update,
  Create,
  Get,
  GetAllUnusedDomains,
  CheckDomainIsBanned,
} = require("../controllers/Domains");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/", authMiddleware, GetAll);
router.get("/get/:id", authMiddleware, Get);
router.put("/:id", authMiddleware, Update);
router.post("/", authMiddleware, Create);

// Unused views
router.get("/unused", authMiddleware, GetAllUnusedDomains);

// Check is banned?
router.get("/check", CheckDomainIsBanned);

module.exports = router;
