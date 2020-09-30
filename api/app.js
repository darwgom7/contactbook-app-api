const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const contacts = require('./routes/contact.routes')
app = express()
app.use(bodyParser.json())
app.use(cors())
mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
app.set('port', process.env.PORT || 5000)
app.use(morgan('dev'))
app.use('/api/contacts', contacts)
module.exports = app
