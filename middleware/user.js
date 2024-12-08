
const { JWT_USER_PASSWORD } = require("../config");

function userMiddleware (req, res, next) {
  const token = req.headers.token;
  const decoded = jwt.verify(token, JWT_USER_PASSWORD);

  if (decoded) {
    req.userId = decoded.id;
    next();
  } else {
    res.status(401).json({ message: "Invalid token,you are not signed in..." });
  }
}


module.exports = {
  userMiddleware: userMiddleware
};