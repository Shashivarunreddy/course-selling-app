const { JWT_ADMIN_PASSWORD } = require("../config");


function adminMiddleware (req, res, next) {
  const token = req.headers.token;
  const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);

  if (decoded) {
    req.userId = decoded.id;
    next();
  } else {
    res.status(401).json({ message: "Invalid token,you are not signed in..." });
  }
}


module.exports = {
  adminMiddleware: adminMiddleware
};