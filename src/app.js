const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("hii ");
    // res.send("Response 1"); // This will send the response and will not call the next middleware
    // and if we want the reponse from the next handler then we cant send the response from the first handler
    next();
  },
  (req, res, next) => {
    // res.send("REsponse2");
    console.log("hello");
    next();
  },
  (req, res) => {
    console.log("hello world");
    res.send("Response 3");
  }
);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
