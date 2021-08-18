const router = require("express").Router();
const store = require('../../middlewares/multer/multerCV')
const { signup , signin, requireSignin } = require('../../controllers/auth/coachController')
// const user = require('../controllers/userController')

//Routes

// Coach signin
router.post('/signin', signin)

// Coach signup
// router.post('/signup',store.single('cv'), signup)
router.post('/signup', signup)

// Coach profile
router.post('/profile', requireSignin, (req, res) => {
    res.status(200).json({ admin : "profile"})
})

module.exports = router;