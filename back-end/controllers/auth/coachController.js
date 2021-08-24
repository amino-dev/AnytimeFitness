const userModel = require("../../models/coachModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

  // Coach sign up
  const signup = (req, res) => {
    userModel.findOne({ email: req.body.email }).exec(async (error, user) => {
      if (user)
        return res.status(400).json({
          error: "Coach already registered",
        });
      const { name, lastname, email, password, city, tel} = req.body;
      // const cv = '/' + req.file.fieldname +'/'+ req.file.filename;
      const hash_password = await bcrypt.hash(password, 10);
      const _user = new userModel({
        name,
        lastname,
        email,
        hash_password,
        city,
        tel,
        // cv,
        username: Math.random().toString(),
        role: 'coach'
      });
      _user.save((error, user) => {
        if (error) {
          return res.status(400).json({
            message: "Something went wrong",
          });
        }
        if (user) {
          return res.status(201).json({
            message: "Coach created suceesfully !"
          })
        }
      });
    });
  };
  
  // Coach sign in
  const signin = (req, res) => {
    userModel.findOne({ email: req.body.email }).exec(async (error, user) => {
      if (error) return res.status(400).json({ error });
      if (user) {
        const isPassword = await user.authenticate(req.body.password);
        if (isPassword && user.role === 'coach') {
          const token = jwt.sign(
            { _id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
          );
          const { _id, name, lastname, email, role, fullName, tel,city,password } = user;
          res.status(200).json({
            token,
            user: { _id, name, lastname, email, role, fullName,tel,city,password},
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