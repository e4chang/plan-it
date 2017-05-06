const jwt = require('jsonwebtoken');
const Users = require('mongoose').model('Users');
const LocalStrategy = require('passport-local').Strategy;

const verifyToken = function(req, res, next) {
  // Missing authorization
  if (!req.headers.authorization) {
    return res.status(401).end();
  }

  // Strip the token from the header
  const token = req.headers.authorization;

  // Check the token and return the user
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, key) => {

    if(err) {
      return res.status(401).end();
    }

    const userid = key.sub;

    return Users.findById(userid, (err, user) => {

      if (err || !user) {
        return res.status(401).end();
      }

      return next();
    })
  })
}

module.exports = verifyToken;
