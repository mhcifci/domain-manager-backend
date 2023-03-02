const express = require("express");
const { Auth } = require("../controllers/Auth");
const rateLimit = require("express-rate-limit");

// IP başına 5 dakika içerisinde maksimum 10 istek atabilir
const rateLimitMiddleware = rateLimit({
  windowMs: 5 * 60 * 1000, // 15 dakika
  max: 10, // IP başına maksimum 100 istek
  message: {
    status: 429,
    error: "Too many requests from this IP, please try again later.",
  },
  headers: true,
  statusCode: 429,
});

const router = express.Router();
router.use(rateLimitMiddleware);

router.post("/", Auth);

module.exports = router;
