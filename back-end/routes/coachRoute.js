const express = require('express')
const router = express.Router()
const coach = require('../controllers/coachController')

//Routes
router.get('/getAll',coach.getAll)
router.get('/get/:id',coach.getCoach)
router.post('/add',coach.add)
router.delete('/delete/:id',coach.delete)
router.put('/update/:id',coach.update)

module.exports = router