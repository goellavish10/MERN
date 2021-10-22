const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  const token = req.header("authorization");

  if (!token) {
    return res.status(401).json({ msg: "No Token" });
  }

  try {
    const decoded = jwt.verify(token, config.get("jwt_secret"));

    req.user = decoded.user;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ msg: "Token is not valid" });
  }
};
