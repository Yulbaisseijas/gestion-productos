const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const productSchema = new Schema({
	Name        :   { type: String },
	Code        :   { type: String },
	Description :   { type: String }
});

module.exports = mongoose.model('product', productSchema);