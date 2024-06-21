
const jwt = require('jsonwebtoken');
const jwtSecretKey = "qwertyuiopasdfghjklzxcvbnmqwerty";

function checkJwt(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }
  jwt.verify(token, jwtSecretKey, (err, decoded) => {
    if (err) {
      console.log(err)
      return res.status(401).json({ message: 'Failed to authenticate token' });
    }
    req.data = decoded;
    next();
  });
}

module.exports = {checkJwt};
