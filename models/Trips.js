var mongoose = require('mongoose');

/**
 * Schema for top level Trip
 */
var TripsSchema = new mongoose.Schema({
  name: String,
  owner: String,
  startDate: Date,
  endDate: Date,
  startCity: mongoose.Schema.Types.ObjectId,
  endCity: mongoose.Schema.Types.ObjectId,
  sharedWith: [mongoose.Schema.Types.ObjectId]
});

mongoose.model('Trips', TripsSchema);
