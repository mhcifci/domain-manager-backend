const express = require('express');
const { UserController } = require('../controllers/User/UserController');
const router = express.Router();

router.get("/", UserController);

module.exports = router;