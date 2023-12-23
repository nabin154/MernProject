const mongoose = require("mongoose");
const User = require("../models/userModel");

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const user = await User.create({ username, email, phone, password });
    if (user) {
      return res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        isAdmin: user.isAdmin,
        token: await user.generateToken(),
      });
    }
  } catch (error) {
    return res.status(400).json({ msg: "Error in registration"});
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(402).json({ msg: "Invalid credentials" });
    }

    const valid = await user.comparePassword(password);
    if (valid) {
      return res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        isAdmin: user.isAdmin,
        token: await user.generateToken(),
      });
    } else {
      return res.status(400).json({ message: "Invalid password!" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Error in login!" });
  }
};

const home = async (req, res) => {
  res.status(201).send("Hello from auth home routes");
};

module.exports = { register, home, login };
