const express = require("express");

const app = express();

app.get("/admin/getAllData", (req, res, next) => {
  // const token = req.body?.token;
  // const token = "admin";
  const token = "abcd";
  const isAdmin = token === "admin";
  if (isAdmin) {
    res.send("All data");
  } else {
    res.status(401).send("Unauthorized");
  }
});

app.get("/admin/deleteUser", (req, res, next) => {
  // const token = req.body?.token;
  // const token = "admin";
  const token = "abcd";
  const isAdmin = token === "admin";
  if (isAdmin) {
    res.send("All data");
  } else {
    res.status(401).send("Unauthorized");
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
