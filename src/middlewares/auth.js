const adminAuth = (req, res, next) => {
  console.log("Admin auth");
  const token = "nitya";
  const isAdmin = token === "nitya";
  if (!isAdmin) {
    res.status(401).send("Unauthoriized Request");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log("Admin auth");
  const token = "nityanand";
  const isAdmin = token === "nitya";
  if (!isAdmin) {
    res.status(401).send("Unauthoriized Request");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
