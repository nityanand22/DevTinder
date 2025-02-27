const express = require("express");

const app = express();

app.get("/ab?c", (req, res) => {
  //* it will work for /ac and /abc means b becomes optional
  res.send({ name: "Nick", lastname: "Doe" });
});

app.get("/ab+c", (req, res) => {
  //* it will work for /abc and /abbbbbb....c means b can be repeated
  res.send({ name: "Nick", lastname: "Doe" });
});

app.get("/ab*cd", (req, res) => {
  //* it will work for /abcd, /abxyzcd, /ab123cd means anything can come between ab and cd
  res.send({ name: "Nick", lastname: "Doe" });
});

app.get("/a(bc)?d", (req, res) => {
  //* it will work for /ad and /abcd means bc is optional
  res.send({ name: "Nick", lastname: "Doe" });
});

app.get("/a(bc)+d", (req, res) => {
  //* it will work for /abcd, /abcbcd, /abcbcbcbcd means bc can be repeated
  res.send({ name: "Nick", lastname: "Doe" });
});

app.delete("/user", (req, res) => {
  res.send("User deleted successfully");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
