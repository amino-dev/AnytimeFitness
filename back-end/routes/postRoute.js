const express = require('express')
const router = express.Router()
const store = require('../middlewares/multer')
const post = require('../controllers/postController')

//Routes
router.get('/getAll',post.getAll)
router.get('/get/:id',post.getPost)
router.post('/add',store.single('photo'),post.add)
router.delete('/delete/:id',post.delete)
router.put('/update/:id',post.update)

module.exports = router