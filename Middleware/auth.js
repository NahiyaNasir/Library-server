
const jwt = require("jsonwebtoken");



const auth = (req, res, next) => {

const token = req.cookies.token;
  // console.log('Received Token:', token);
  if (!token) {
    return res.status(401).send("Access denied");
  }

  try {
    const decoded = jwt.verify(token, process.env.SecretKey);
    req.user = decoded;
    // console.log(decoded);
    next();
  } catch (error) {
    res.status(401).send("Invalid token");
  }
};

module.exports = auth