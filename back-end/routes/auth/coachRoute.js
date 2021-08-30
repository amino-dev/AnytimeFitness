const router = require("express").Router();
const store = require('../../middlewares/multer/multerCV')
const { signup , signin, requireSignin } = require('../../controllers/auth/coachController')
const coach = require('../../controllers/auth/coachController')

//Routes

// Coach signin
router.post('/signin', signin)

// Coach signup
// router.post('/signup',store.single('cv'), signup)
router.post('/signup', signup)

// Coach profile
router.post('/profile', requireSignin, (req, res) => {
    res.status(200).json({ coach : "profile"})
})

// Get all coachs
router.get('/getAll',coach.getAll)


// Delete a coach
router.delete('/delete/:id',coach.delete)


module.exports = router;