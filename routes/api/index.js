const router = require("express").Router();
const userRoutes = require("./users");
const authRoutes = require("./auth");

// API Routes
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
