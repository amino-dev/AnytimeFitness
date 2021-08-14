// const router = require("express").Router();
// // Bring in the User Registration function
// const {
//   userAuth,
//   userLogin,
//   checkRole,
//   userRegister,
//   serializeUser
// } = require("../controllers/userController");

// const user = require('../controllers/userController')
// // Users Registeration Route
// router.post("/register-user", async (req, res) => {
//   await userRegister(req.body, "user", res);
// });

// // Coachs Registration Route
// router.post("/register-coach", async (req, res) => {
//     await userRegister(req.body, "coach", res);
//   });

// // Admin Registration Route
// router.post("/register-admin", async (req, res) => {
//   await userRegister(req.body, "admin", res);
// });

// // Users Login Route
// router.post("/login-user", async (req, res) => {
//   await userLogin(req.body, "user", res);
// });

// // Coachs Login Route
// router.post("/login-coach", async (req, res) => {
//     await userLogin(req.body, "coach", res);
//   });

// // Admin Login Route
// router.post("/login-admin", async (req, res) => {
//   await userLogin(req.body, "admin", res);
// });


// // Profile Route
// router.get("/profile", userAuth, async (req, res) => {
//   return res.json(serializeUser(req.user));
// });

// // Users Protected Route
// router.get(
//   "/user-protected",
//   userAuth,
//   checkRole(["user"]),
//   async (req, res) => {
//     return res.json("Hello User");
//   }
// );

// // Admin Protected Route
// router.get(
//   "/admin-protected",
//   userAuth,
//   checkRole(["admin"]),
//   async (req, res) => {
//     return res.json("Hello Admin");
//   }
// );

// // Get all users
// router.get('/getAll',user.getAll)

// // Get a user
// router.get('/get/:id',user.getUser)


// // Delete a user
// router.delete('/delete/:id',user.delete)


// // Update a user
// router.put('/update/:id',user.update)

// module.exports = router;

const router = require("express").Router();
const { signup , signin, requireSignin } = require('../../controllers/auth/userController')
const user = require('../../controllers/auth/userController')

//Routes

// User sign in
router.post('/signin', signin)

// User sign up
router.post('/signup', signup)

// User profile
router.post('/profile', requireSignin, (req, res) => {
    res.status(200).json({ user : "profile"})
})

// Get all users
router.get('/getAll',user.getAll)

// Get a user
router.get('/get/:id',user.getUser)


// Delete a user
router.delete('/delete/:id',user.delete)


// Update a user
router.put('/update/:id',user.update)


module.exports = router;

