const express = require("express");
const {
  GetAll
} = require("../controllers/DomainsCategory");
const router = express.Router();

router.get("/", GetAll);

module.exports = router;
