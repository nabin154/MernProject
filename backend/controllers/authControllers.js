const mongoose = require("mongoose");
const User = require("../models/userModel");

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(400).json({ msg: "User already exists" });
    }

    const user = await User.create({ username, email, phone, password });
    if (user) {
      res.status(200).json({
        _id: user._id,
        username:user.username,
        email: user.email,
        phone: user.phone,
        isAdmin: user.isAdmin,
        token: await user.generateToken(),
      });
    }
  } catch (error) {

    next(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      res.send(402).json({ msg: "invalid credentials" });
    }

    const valid = await user.comparePassword(password);
    if (valid) {
      res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        isAdmin: user.isAdmin,
        token: await user.generateToken(),
      });
    }
    else{
      res.status(400).json({message :"Invalid password !"});
    }
  } catch (error) {

    next(error);
  }
};

const home = async (req, res) => {
  res.status(201).send("hello form auth home routes");
};

module.exports = { register, home, login };
