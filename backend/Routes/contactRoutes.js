const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware.js");
const {adminValidator} = require("../middlewares/adminMiddleware.js")
const {
  contactForm,
  getContacts,
  deleteContact,
} = require("../controllers/contactController.js");

router.route("/contact").post(protect,contactForm).get(protect,adminValidator, getContacts);
router.route("/contact/:id").delete(protect, adminValidator,deleteContact);

module.exports = router;
