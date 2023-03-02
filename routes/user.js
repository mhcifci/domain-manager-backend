const express = require('express');
const { GetAll, Get } = require('../controllers/User');
const router = express.Router();

router.get("/", GetAll);
// Get single user
router.get("/get/:id", Get);

module.exports = router;