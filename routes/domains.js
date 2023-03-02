const express = require("express");
const {
  GetAll,
  UpdateDomain,
  CreateDomain
} = require("../controllers/Domains");
const router = express.Router();

router.get("/", GetAll);

// Uptade domain
router.put("/:id", UpdateDomain);
// Create domain
router.post("/", CreateDomain);

module.exports = router;
