var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UsersSchema = new mongoose.Schema({
  username: {type: String, lowercase: true, unique: true},
  hash: String,
  salt: String,
  email: {type: String, default: 'huh'},
  firstName: String,
  lastName: String
});

UsersSchema.methods.setPassword = function(password) {
  // Generate salt
  this.salt = bcrypt.genSaltSync();
  this.hash = bcrypt.hashSync(password, this.salt);
};

UsersSchema.methods.checkPassword = function(password) {
  var hash = bcrypt.hashSync(password, this.salt);
  return this.hash == hash;
};

mongoose.model('Users', UsersSchema);
