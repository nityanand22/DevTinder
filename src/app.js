const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ name: "Nityanand", age: 25 });
});

app.post("/user", (req, res) => {
  res.send("User created successfully");
});

app.delete("/user", (req, res) => {
  res.send("User deleted successfully");
});

app.use("/test", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
