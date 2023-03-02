const express = require('express');
const { GetAll } = require('../controllers/User');
const router = express.Router();

router.get("/", GetAll);

module.exports = router;