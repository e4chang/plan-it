var express = require('express');
var mongoose = require('mongoose');
var Trips = mongoose.model('Trips');
var Users = mongoose.model('Users');
var router = express.Router();

/* GET Test authorization. */
router.get('/', function(req, res, next) {
  res.send('Authorization passed.');
});

/* GET Trips for user */
router.get('/trips/:id', (req, res, next) => {
  /* First get the username by id */
  var user_id = mongoose.Types.ObjectId(req.params.id);
  var username = Users.findOne({_id: user_id},
    (err, user) => {
      if(err) {
        return res.json({success: false});
      }
      if(!user) {
        console.log('User not found');
      }

      /* Get all trips for created by this user */
      var result = Trips.find({owner: user.username},
        (err, trips) => {
          if(err) {
            return res.json({success: false});
          }
          if(!trips) {
            console.log('No trips not found');
          }
          return res.json(trips);
      });
  });
});

/* POST Create trip. */
router.post('/trip', function(req, res, next) {
  if(req.body.name == '') {
    return res.json({success: false});
  } else {
    var newTrip = new Trips();
    newTrip.name = req.body.name;
    newTrip.owner = req.body.username;
    newTrip.startDate = req.body.startdate;
    newTrip.endDate = req.body.enddate;
    newTrip.startCity = req.body.startcity;
    newTrip.endCity = req.body.endcity;

    // save the user
    newTrip.save(function(err) {

      if (err){
        console.log('Error in Saving trip: '+err);
        throw err;
      }

      return res.json({success: true, message: 'Saved a new trip!'});
    });
  }
});

module.exports = router;
