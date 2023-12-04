const express = require("express");
const router = express.Router();
const { contactForm } = require("../controllers/contactController.js");

router.route("/contact").post(contactForm);

module.exports = router;
