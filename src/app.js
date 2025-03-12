const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { userAuth } = require("./middlewares/auth");

const app = express();
app.use(express.json());
app.use(cookieParser());

// Inserting data in the database
app.post("/signup", async (req, res) => {
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
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("Incorrect Email");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      // created JWT token
      const token = await jwt.sign({ _id: user._id }, "DEV@Tinder", {
        expiresIn: "1d",
      });
      // Add the token to cookie and send the response back to user
      res.cookie("token", token);
      res.send("Login Successfully");
    } else {
      throw new Error("Incorrect password");
    }
  } catch (error) {
    res.status(400).send("ERROR : " + error.message);
  }
});

// egt profile of the user
app.get("/profile", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.post("/sendConnectionRequest", userAuth, async (req, res) => {
  const user = req.user;
  res.send(user.firstName + " sent the connection request");
});

connectDB()
  .then(() => {
    console.log("Database connected");
    app.listen(3000, () => {
      console.log("Server is listening on port 3000");
    });
  })
  .catch((err) => {
    console.log("Error in connecting database", err);
  });
