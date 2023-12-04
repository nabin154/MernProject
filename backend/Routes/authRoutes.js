const express = require("express");
const router = express.Router();
const { register, home ,login } =  require( "../controllers/authControllers");
const { signupSchema, loginSchema } = require("../validation/auth_validator");
const validate = require("../middlewares/validationMiddleware");


router.route("/").get(home);
router.route("/register").post(validate(signupSchema),register);
router.route("/login").post(validate(loginSchema),login);





module.exports = router;