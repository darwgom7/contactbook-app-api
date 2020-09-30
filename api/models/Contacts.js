const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Contacts = mongoose.model(
	'Contact',
	new Schema({
		name: String,
		phone: String,
		birthday: Date,
		address: String,
		email: String
	})
)
module.exports = Contacts
