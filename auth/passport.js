var jwt = require('jsonwebtoken');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var Users = mongoose.model('Users');

// Login strategy
passport.use('login', new LocalStrategy({
    passReqToCallback : true
  },
  function(req, username, password, done) {
    // Query database for username
    Users.findOne(
      { 'username' :  username },
      function(err, user) {

        // Return if error occurs
        if(err) {
          return done(err);
        }

        // Check login credentials
        if(!user || !user.checkPassword(password)) {
          console.log('Invalid username or password');
          return done(null, false, { message: 'Invalid username or password'});
        }

        // Create jwt token
        const payload = {
          sub: user._id
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
        const data = {
          username: user.username
        };

        console.log(token);
        // Return successful login
        return done(null, token, data);
      }
    );
  }
));

// Registration strategy
passport.use('signup', new LocalStrategy({
    passReqToCallback : true
  },
  function(req, username, password, done) {
    findOrCreateUser = function(){
      // Query database for username
      Users.findOne({'username':username},function(err, user) {

        // Return if any error occurs
        if (err){
          return done(err);
        }

        // already exists
        if (user) {
          console.log('User already exists');
          return done(null, false, { message: 'User already exists'});
        } else {
          // create the user
          var newUser = new Users();

          // set the user's fields
          newUser.username = username;
          newUser.setPassword(password);
          newUser.email = req.body.email;
          newUser.firstName = req.body.firstName;
          newUser.lastName = req.body.lastName;

          // save the user
          newUser.save(function(err) {

            if (err){
              console.log('Error in Saving user: '+err);
              throw err;
            }

            console.log('User Registration succesful');

            // Create jwt token
            const payload = {
              sub: newUser._id
            };
            const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
            const data = {
              username: username
            };

            console.log(token);
            // Return successful login
            return done(null, token, data);
          });
        }
      });
    };

    // Delay the execution of findOrCreateUser and execute
    // the method in the next tick of the event loop
    process.nextTick(findOrCreateUser);
  }
));
