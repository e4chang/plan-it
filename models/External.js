/**
 * This file is for schemas that use external sources
 * for populating data.
 */

var mongoose = require('mongoose');

/**
 * Schema for city database
 */
var CitiesSchema = new mongoose.Schema({
  name: String,
  country: String,
  region: String,
  lat: Number,
  long: Number
});

/**
 * Schema for places database
 */
var PlacesSchema = new mongoose.Schema({
  name: String,
  city: mongoose.Schema.Types.ObjectId,
  type: String // Food, activity, resort
});

mongoose.model('Cities', CitiesSchema);
mongoose.model('Places', PlacesSchema);
