const express = require('express')
const router = express.Router()
const contact = require('../controllers/contactController')

//Routes
router.get('/getAll',contact.getAll)
router.get('/get/:id',contact.getContact)
router.post('/add',contact.add)
router.delete('/delete/:id',contact.delete)
router.put('/update/:id',contact.update)

module.exports = router