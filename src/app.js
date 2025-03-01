const express = require("express");

const app = express();

//! here we have two routes, one for getting all data and one for deleting user, and both routes have same code, so we can create a middleware to handle all get post ,... requests

// Middleware
app.use("/admin", (req, res, next) => {
  const token = "nitya";
  const isAdmin = token === "xyz";
  if (!isAdmin) {
    res.status(401).send("Unauthoriized Request");
  } else {
    next();
  }
});

//* here i have used same code for both the routes, so i will create a middleware for this, and so we need middleware for this

app.get("/admin/getAllData", (req, res) => {
  res.send("All data Sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("All Data deleted");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
