const { Router } = require('express')
const Contacts = require('../models/Contacts')
const router = Router()
router.get('/', (req, res) => {
	Contacts.find()
		.exec()
		.then(contact => res.status(200).send(contact))
})
router.get('/:id', (req, res) => {
	Contacts.findById(req.params.id)
		.exec()
		.then(contact => res.status(200).send(contact))
})
router.post('/', (req, res) => {
	Contacts.create(req.body).then(contact => res.status(201).send(contact))
})
router.put('/:id', (req, res) => {
    Contacts.findByIdAndUpdate(req.params.id, req.body)
    .then(() =>
		res.sendStatus(204)
	)
})
router.delete('/:id', (req, res) => {
	Contacts.findByIdAndDelete(req.params.id)
		.exec()
		.then(() => res.sendStatus(204))
})
module.exports = router
