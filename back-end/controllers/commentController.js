const mongoose = require("mongoose");
const axios = require("axios");
const { PORT } = require("../config/config");
const commentModel = require('../models/commentModel')

module.exports = {
   //get all comments
    getAll: async (req, res) => {
        try {
            const comment = await commentModel.find();
            res.json(comment);
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("server error");
          }
    },
    //get a comment 
    getComment: async (req, res) => {
        try {
           const comment = await commentModel.findById(req.params.id).then(
               (commentModel) => {
                   axios
                    .get(`http://localhost:${PORT}/anytimeFitness/user/get/` + commentModel.userId)
                    .then((response) => {
                        var commentObject = {
                            name : response.data.name,
                            lastname : response.data.lastname,
                            course : commentModel.course,
                            date : commentModel.date,
                            commentaire : commentModel.commentaire, 
                        }
                        res.json(commentObject)
                    })
               }
           )
       
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("server error");
          }
    },
    //add a comment 
    add: async (req, res) => {
        const { course , date , commentaire} = req.body;

        // const photo = req.body.photo
        const userId = mongoose.Types.ObjectId(req.body.userId)
        try {
          comment = new commentModel ({
            userId,
            course ,
            date , 
            commentaire
        })
          await comment.save();
          res.json(comment);
        } catch (error) {
          console.error(error.message);
          res.status(500).send("server error");
        }
    },
    //delete a comment 
    delete: async (req,res)=>{
        try {
          const comment = await commentModel.findByIdAndDelete(req.params.id)
          res.json(comment)
        }
        catch (error) {
         console.error(error.message);
         res.status(500).send("server error")
       }
    },
    //update a comment 
    update: async (req,res)=>{
        try {
          const comment = await commentModel.findByIdAndUpdate(req.params.id,req.body, {new:true})
            res.json(comment)
        }
        catch (error) {
          console.error(error.message);
          res.status(500).send("server error")
        }
      }
    }   