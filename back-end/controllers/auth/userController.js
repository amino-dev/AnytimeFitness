// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const passport = require("passport");
// const userModel = require("../models/userModel");
// const { SECRET } = require("../config/config");

// /**
//  * @DESC To register the user (ADMIN, USER, COACH)
//  */
// const userRegister = async (userDets, role, res) => {
//   try {
//     // Validate the username
//     let usernameNotTaken = await validateUsername(userDets.username);
//     if (!usernameNotTaken) {
//       return res.status(400).json({
//         message: `Username is already taken.`,
//         success: false
//       });
//     }

//     // validate the email
//     let emailNotRegistered = await validateEmail(userDets.email);
//     if (!emailNotRegistered) {
//       return res.status(400).json({
//         message: `Email is already registered.`,
//         success: false
//       });
//     }

//     // Get the hashed password
//     const password = await bcrypt.hash(userDets.password, 12);
//     // create a new user
//     const User = new userModel({
//       ...userDets,
//       password,
//       role
//     });

//     await User.save();
//     return res.status(201).json({
//       message: "Hurry! now you are successfully registred. Please nor login.",
//       success: true
//     });
//   } catch (err) {
//     // Implement logger function (winston)
//     return res.status(500).json({
//       message: "Unable to create your account.",
//       success: false
//     });
//   }
// };

// /**
//  * @DESC To Login the user (ADMIN, USER, COACH)
//  */
// const userLogin = async (userCreds, role, res) => {
//   let { email, password } = userCreds;
//   // First Check if the username is in the database
//   const user = await userModel.findOne({ email });
//   if (!user) {
//     return res.status(404).json({
//       message: "Email is not found. Invalid login credentials.",
//       success: false
//     });
//   }
//   // We will check the role
//   if (user.role !== role) {
//     return res.status(403).json({
//       message: "Please make sure you are logging in from the right portal.",
//       success: false
//     });
//   }
//   // That means user is existing and trying to signin froM the right portal
//   // Now check for the password
//   let isMatch = await bcrypt.compare(password, user.password);
//   if (isMatch) {
//     // Sign in the token and issue it to the user
//     let token = jwt.sign(
//       {
//         user_id: user._id,
//         role: user.role,
//         username: user.username,
//         email: user.email
//       },
//       SECRET,
//       { expiresIn: "7 days" }
//     );

//     let result = {
//       username: user.username,
//       role: user.role,
//       email: user.email,
//       token: `Bearer ${token}`,
//       expiresIn: 168
//     };

//     return res.status(200).json({
//       ...result,
//       message: "Hurray! You are now logged in.",
//       success: true
//     });
//   } else {
//     return res.status(403).json({
//       message: "Incorrect password.",
//       success: false
//     });
//   }
// };

// const validateUsername = async username => {
//   let user = await userModel.findOne({ username });
//   return user ? false : true;
// };

// /**
//  * @DESC Passport middleware
//  */
// const userAuth = passport.authenticate("jwt", { session: false });

// /**
//  * @DESC Check Role Middleware
//  */
// const checkRole = roles => (req, res, next) =>
//   !roles.includes(req.user.role)
//     ? res.status(401).json("Unauthorized")
//     : next();

// const validateEmail = async email => {
//   let user = await userModel.findOne({ email });
//   return user ? false : true;
// };

// const serializeUser = user => {
//   return {
//     username: user.username,
//     email: user.email,
//     name: user.name,
//     _id: user._id,
//     updatedAt: user.updatedAt,
//     createdAt: user.createdAt
//   };
// };

// module.exports = {
//   userAuth,
//   checkRole,
//   userLogin,
//   userRegister,
//   serializeUser,
  
//   //get all users
//   getAll: async (req, res) => {
//     try {
//       const userModel = await user.find();
//       res.json(userModel);
//     }
//     catch (error) {
//        console.error(error.message);
//        res.status(500).send("server error");
//         }
//     },
//   //get a user
//   getUser: async (req, res) => {
//     try {
//         const user = await userModel.findById(req.params.id)
//         res.json(user)
//     }
//     catch (error) {
//         console.error(error.message);
//         res.status(500).send("server error");
//       }
//     },
//   //delete a user
//   delete: async (req,res)=>{
//     try {
//       const user = await userModel.findByIdAndDelete(req.params.id)
//       res.json(user)
//     }
//     catch (error) {
//      console.error(error.message);
//      res.status(500).send("server error")
//    }
// },
//   //update a user
//   update: async (req,res)=>{
//     try {
//       const user = await userModel.findOneAndUpdate(req.params.id,req.body, {new:true})
//         res.json(user)
//     }
//     catch (error) {
//       console.error(error.message);
//       res.status(500).send("server error")
//     }
//   }
// };

const userModel = require("../../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

  // User sign up
  const signup = (req, res) => {
    userModel.findOne({ email: req.body.email }).exec(async (error, user) => {
      if (user)
        return res.status(400).json({
          error: "User already registered",
        });
      const { sex,name, lastname, email, password, city, tel} = req.body;
      const hash_password = await bcrypt.hash(password, 10);
      const _user = new userModel({
        sex,
        name,
        lastname,
        email,
        hash_password,
        city,
        tel,
        username: Math.random().toString(),
      });
      _user.save((error, user) => {
        if (error) {
          return res.status(400).json({
            message: "Something went wrong",
          });
        }
        if (user) {
          return res.status(201).json({
            message: "User created suceesfully !"
          })
        }
      });
    });
  };
  
  // User sign in
  const signin = (req, res) => {
    userModel.findOne({ email: req.body.email }).exec(async (error, user) => {
      if (error) return res.status(400).json({ error });
      if (user) {
        const isPassword = await user.authenticate(req.body.password);
        if (isPassword && user.role === "user") {
          const token = jwt.sign(
            { _id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
          );
          const { _id, name, lastname, email, role, fullName } = user;
          res.status(200).json({
            token,
            user: { _id, name, lastname, email, role, fullName },
          });
        } else {
          return res.status(400).json({
            message: "Invalid password !",
          });
        }
      } else {
        return res.status(400).json({ message: "Something went wrong" });
      }
    });
  };

  const requireSignin = (req, res, next ) => {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  }
  module.exports = {
     signup,
     signin,
     requireSignin,
     
      //get all users
      getAll: async (req, res) => {
        try {
          const userModel = await user.find();
          res.json(userModel);
        }
        catch (error) {
           console.error(error.message);
           res.status(500).send("server error");
            }
        },
      //get a user
      getUser: async (req, res) => {
        try {
            const user = await userModel.findById(req.params.id)
            res.json(user)
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("server error");
          }
        },
      //delete a user
      delete: async (req,res)=>{
        try {
          const user = await userModel.findByIdAndDelete(req.params.id)
          res.json(user)
        }
        catch (error) {
         console.error(error.message);
         res.status(500).send("server error")
       }
    },
      //update a user
      update: async (req,res)=>{
        try {
          const user = await userModel.findOneAndUpdate(req.params.id,req.body, {new:true})
            res.json(user)
        }
        catch (error) {
          console.error(error.message);
          res.status(500).send("server error")
        }
      }
    };
  