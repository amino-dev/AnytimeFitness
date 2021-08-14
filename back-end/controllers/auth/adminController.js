const userModel = require("../../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

  // Admin sign up
  const signup = (req, res) => {
    userModel.findOne({ email: req.body.email }).exec(async (error, user) => {
      if (user)
        return res.status(400).json({
          error: "Admin already registered",
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
        role: 'admin'
      });
      _user.save((error, user) => {
        if (error) {
          return res.status(400).json({
            message: "Something went wrong",
          });
        }
        if (user) {
          return res.status(201).json({
            message: "Admin created suceesfully !"
          })
        }
      });
    });
  };
  
  // Admin sign in
  const signin = (req, res) => {
    userModel.findOne({ email: req.body.email }).exec(async (error, user) => {
      if (error) return res.status(400).json({ error });
      if (user) {
        const isPassword = await user.authenticate(req.body.password);
        if (isPassword && user.role === 'admin') {
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
     requireSignin
    };