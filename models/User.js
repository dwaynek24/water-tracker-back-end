
const mongoose = require('../db/connection');


const UserSchema = new mongoose.Schema({
	name: String,
	activity: String,
    frequency: Number,
    duration: Number,
    gallons:Number,
});


const User = mongoose.model('User', UserSchema);


module.exports = User;