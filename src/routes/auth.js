const express = require("express");
const bcrypt = require("bcrypt");
const { validateSignUpData } = require("../utils/validation");
const User = require("../models/user");
const authRouter = express.Router();

// Inserting data in the database
authRouter.post("/signup", async (req, res) => {
  try {
    validateSignUpData(req);

    const { firstName, lastName, email, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);

    // Creating a new instance of user model
    const user = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });
    await user.save();
    res.send("User added succesfully");
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

// LogIn API
authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("Incorrect Email");
    }
    const isPasswordValid = await user.validatePassword(password);
    if (isPasswordValid) {
      const token = await user.getJWT();
      res.cookie("token", token, { httpOnly: true });
      res.send("Login Successfully");
    } else {
      throw new Error("Incorrect password");
    }
  } catch (error) {
    res.status(400).send("ERROR : " + error.message);
  }
});

module.exports = authRouter;
