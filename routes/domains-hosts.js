const express = require("express");
const {
  GetAll
} = require("../controllers/DomainsHosts");
const router = express.Router();

router.get("/", GetAll);

module.exports = router;
