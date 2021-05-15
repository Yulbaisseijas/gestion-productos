const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
	firstName  :   { type: String },
	lastName   :   { type: String },
	email      :   { type: String },
    role       :   { type: String },
    password   :   { type: String },
    loggedIn   :   { type: Boolean}
});

module.exports = mongoose.model('user', userSchema);