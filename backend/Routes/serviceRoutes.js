const express = require("express");

const router = express.Router();
const {getServices}= require("../controllers/serviceController");



router.route("/").get(getServices);

module.exports= router;