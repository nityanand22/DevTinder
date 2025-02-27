const express = require("express");

const app = express();

app.get("/user/:userId/:name/:password", (req, res) => {
  res.send(req.params);
});

app.get("/user/:userId", (req, res) => {
  res.send(req.params);
  res.send({ name: "Nick", lastname: "jones" });
});

app.get("/user", (req, res) => {
  res.send(req.query);
  res.send({ name: "Nick", lastname: "Doe" });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
