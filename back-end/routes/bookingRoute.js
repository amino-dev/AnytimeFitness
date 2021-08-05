const express = require('express')
const router = express.Router()
const booking = require('../controllers/bookingController')

//Routes
router.get('/getAll',booking.getAll)
router.get('/get/:id',booking.getBooking)
router.post('/add',booking.add)
router.delete('/delete/:id',booking.delete)
router.put('/update/:id',booking.update)

module.exports = router