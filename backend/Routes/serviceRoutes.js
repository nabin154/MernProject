const express = require("express");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();
const {getServices, addServices}= require("../controllers/serviceController");
const {adminValidator } = require("../middlewares/adminMiddleware");



router.route("/").get(getServices).post(protect, adminValidator, addServices);

module.exports= router;