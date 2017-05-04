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
router.post('/login', passport.authenticate('login', {
  successRedirect: '/home',
  failureRedirect: '/login',
  failureFlash : false
}));

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
