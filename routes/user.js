const express = require("express");
const { GetAll, Get, Update, Create } = require("../controllers/User");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/", authMiddleware, GetAll);
router.get("/get/:id", authMiddleware, Get);
router.put("/:id", authMiddleware, Update);
router.post("/", authMiddleware, Create);

module.exports = router;
