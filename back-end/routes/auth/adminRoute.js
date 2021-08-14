const router = require("express").Router();
const { signup , signin, requireSignin } = require('../../controllers/auth/adminController')
// const user = require('../controllers/userController')

//Routes

// Admin sign in
router.post('/signin', signin)

// Admin sign up
router.post('/signup', signup)

// Admin profile
router.post('/profile', requireSignin, (req, res) => {
    res.status(200).json({ admin : "profile"})
})

// // Get all users
// router.get('/getAll',user.getAll)

// // Get a user
// router.get('/get/:id',user.getUser)


// // Delete a user
// router.delete('/delete/:id',user.delete)


// // Update a user
// router.put('/update/:id',user.update)


module.exports = router;
