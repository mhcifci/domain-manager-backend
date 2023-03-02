const express = require("express");
const {
  GetAll
} = require("../controllers/DomainsNote");
const router = express.Router();

router.get("/", GetAll);

module.exports = router;
