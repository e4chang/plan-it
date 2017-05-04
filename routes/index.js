var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', {title: 'Login'});
});

/* POST login page. */
router.post('/login', passport.authenticate('login', {
  successRedirect: '/home',
  failureRedirect: '/login',
  failureFlash : true
}));

/* GET registration page. */
router.get('/signup', function(req, res){
  res.render('register',{title: 'Signup'});
});

/* POST registration page. */
router.post('/signup', passport.authenticate('signup', {
  successRedirect: '/home',
  failureRedirect: '/signup',
  failureFlash : true
}));

/* GET Logout */
router.get('/signout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
