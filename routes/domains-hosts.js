const express = require("express");
const {
  GetAll, Get
} = require("../controllers/DomainsHosts");
const router = express.Router();

router.get("/", GetAll);
router.get("/get/:id", Get);

module.exports = router;
