/**
 * Created by User on 2014/1/19.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema({
    name: String,
    email: String,
    mobile: String
});
module.exports = mongoose.model('Contact', Schema);