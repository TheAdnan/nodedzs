var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String,
    full_name: String,
    birth_date: Date
});

//Export function to create "User" model class
module.exports = mongoose.model('User', UserSchema);