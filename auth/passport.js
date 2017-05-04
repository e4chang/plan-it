var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var Users = mongoose.model('Users');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
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

        // Return successful login
        return done(null, user);

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

          // if there is no user with that email
          // create the user
          var newUser = new Users();
          // set the user's local credentials
          newUser.username = username;
          newUser.setPassword(password);
          console.log(req.body.email);
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
            return done(null, newUser);
          });
        }
      });
    };

    // Delay the execution of findOrCreateUser and execute
    // the method in the next tick of the event loop
    process.nextTick(findOrCreateUser);
  }
));
