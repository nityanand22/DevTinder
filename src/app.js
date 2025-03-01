const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");

const app = express();

//! here we have two routes, one for getting all data and one for deleting user, and both routes have same code, so we can create a middleware to handle all get post ,... requests

// Middleware
app.use("/admin", adminAuth);

app.post("/user/login", (req, res) => {
  res.send("User login successfully");
});

//* here i have used same code for both the routes, so i will create a middleware for this, and so we need middleware for this

app.get("/user/data", userAuth, (req, res) => {
  res.send("This is user route111");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All data Sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("All Data deleted");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
