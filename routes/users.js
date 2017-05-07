var express = require('express');
var mongoose = require('mongoose');
var Trips = mongoose.model('Trips');
var router = express.Router();

/* GET Test authorization. */
router.get('/', function(req, res, next) {
  res.send('Authorization passed.');
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
