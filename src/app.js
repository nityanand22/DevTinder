const express = require("express");

const app = express();

app.get("/getUserData", (req, res) => {
  throw new Error("error");
  res.send("User data sent");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("something went wrong");
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
