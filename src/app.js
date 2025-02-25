const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hello from the home server ");
});

app.use("/hello", (req, res) => {
  res.send("Hello from the server hello");
});

app.use("/test", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
