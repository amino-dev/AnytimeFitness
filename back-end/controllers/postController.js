const mongoose = require("mongoose");
const axios = require("axios");
const { PORT } = require("../config/config");
const postModel = require('../models/postModel')

module.exports = {
   //get all posts
    getAll: async (req, res) => {
        try {
            const post = await postModel.find();
            res.json(post);
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("server error");
          }
    },
    //get a post 
    // getPost: async (req, res) => {
    //     try {
    //        const post = await postModel.findById(req.params.id).then(
    //            (postModel) => {
    //                axios
    //                 .get(`http://localhost:${PORT}/anytimeFitness/user/get/` + postModel.userId)
    //                 .then((response) => {
    //                     var postObject = {
    //                         name : response.data.name,
    //                         lastname : response.data.lastname,
    //                         photo : postModel.photo,
    //                         speciality : postModel.speciality,
    //                         description : postModel.description,
    //                         soloprice : postModel.soloprice,
    //                         duoprice : postModel.duoprice,
    //                         trioprice : postModel.trioprice,
    //                         quatuorprice : postModel.quatuorprice,
    //                         transportprice : postModel.transportprice,
    //                         time : postModel.time,
    //                         coursetype: postModel.coursetype,
    //                         place : postModel.place,
    //                         courses : postModel.courses,
    //                         level : postModel.level,
    //                         adress : postModel.adress,
    //                         mobility : postModel.mobility,
    //                         experience : postModel.experience,
    //                         certifications : postModel.certifications,
    //                         method : postModel.method,
    //                         video : postModel.video
    //                     }
    //                     res.json(postObject)
    //                 })
    //            }
    //        )
       
    //     }
    //     catch (error) {
    //         console.error(error.message);
    //         res.status(500).send("server error");
    //       }
    // },
    //add a post 
    add: async (req, res) => {
        const {
          name,
          lastname,
          photo,
          speciality,
          description,
          soloprice,
          duoprice,
          trioprice,
          quatuorprice,
          transportprice,
          place,
          courses,
          level,
          adress,
          mobility,
          experience1,
          experience2,
          experience3,
          experience4,
          certification1,
          certification2,
          certification3,
          certification4,
          method,
        } = req.body;
        // const photo = '/' + req.file.fieldname +'/'+ req.file.filename;
        // const userId = mongoose.Types.ObjectId(req.body.userId)
        try {
          post = new postModel ({
            // userId,
            name,
            lastname,
            photo,
            speciality,
            description,
            soloprice,
            duoprice,
            trioprice,
            quatuorprice,
            transportprice,
            place,
            courses,
            level,
            adress,
            mobility,
            experience1,
            experience2,
            experience3,
            experience4,
            certification1,
            certification2,
            certification3,
            certification4,
            method
        })
          await post.save();
          res.json(post);
        } catch (error) {
          console.error(error.message);
          res.status(500).send("server error");
        }
    },
    //delete a post 
    delete: async (req,res)=>{
        try {
          const post = await postModel.findByIdAndDelete(req.params.id)
          res.json(post)
        }
        catch (error) {
         console.error(error.message);
         res.status(500).send("server error")
       }
    },
    //update a post 
    update: async (req,res)=>{
        try {
          const post = await postModel.findByIdAndUpdate(req.params.id,req.body, {new:true})
            res.json(post)
        }
        catch (error) {
          console.error(error.message);
          res.status(500).send("server error")
        }
      }
    }   