const express = require("express");
const { GetAll, Get, Update, Create } = require("../controllers/DomainsHosts");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/", authMiddleware, GetAll);
router.get("/get/:id", authMiddleware, Get);
router.put("/:id", authMiddleware, Update);
router.post("/", authMiddleware, Create);

module.exports = router;
