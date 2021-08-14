const router = require("express").Router();
const { signup , signin, requireSignin } = require('../../controllers/auth/coachController')
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

module.exports = router;