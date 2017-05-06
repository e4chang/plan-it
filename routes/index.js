var express = require('express');
var router = express.Router();
var passport = require('passport');

//------------------------------------------------------------------
// Temporary section
//------------------------------------------------------------------

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', {title: 'Login'});
});

/* GET registration page. */
router.get('/signup', function(req, res){
  res.render('register', { title: 'Signup'});
});

/* GET Logout */
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});
//------------------------------------------------------------------

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

/* POST registration page. */
router.post('/signup', (req, res, next) => {
  return passport.authenticate('signup', (err, token, userData) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: 'Error logging in.'
      });
    }

    return res.json({
      success: true,
      message: 'You have successfully registered!',
      token,
      user: userData
    });
  })(req, res, next);
});

module.exports = router;
