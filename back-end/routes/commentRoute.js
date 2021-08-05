const express = require('express')
const router = express.Router()
const comment = require('../controllers/commentController')

//Routes
router.get('/getAll',comment.getAll)
router.get('/get/:id',comment.getComment)
router.post('/add',comment.add)
router.delete('/delete/:id',comment.delete)
router.put('/update/:id',comment.update)

module.exports = router