const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  // Creating a new user model
  const user = new User({
    firstName: "Bhagyesh",
    lastName: "Patil",
    email: "Bhagya@gmail.com",
    password: "245699",
    age: 21,
    gender: "male",
  });

  try {
    await user.save();
    res.send("User added succesfully");
  } catch (err) {
    res.status(400).send("Error in saving user", err.message);
  }
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
