var express = require('express');
var router = express.Router();
var passport = require('passport');

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/home', isAuthenticated, function(req, res) {
  res.render('index', { title: 'Home', user: req.user });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', {title: 'Login'});
});

/* POST login page. */
router.post('/login', (req, res, next) => {

  return passport.authenticate('login', (err, token, userData) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: 'Error logging in.'
      });
    }


    return res.json({
      success: true,
      message: 'You have successfully logged in!',
      token,
      user: userData
    });
  })(req, res, next);
});

/* GET registration page. */
router.get('/signup', function(req, res){
  res.render('register', { title: 'Signup'});
});

/* POST registration page. */
router.post('/signup', passport.authenticate('signup', {
  successRedirect: '/home',
  failureRedirect: '/signup',
  failureFlash : false
}));

/* GET Logout */
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
