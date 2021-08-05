const contactModel = require('../models/contactModel')

module.exports = {
   //get all contact forms
    getAll: async (req, res) => {
        try {
            const contact = await contactModel.find();
            res.json(contact);
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("server error");
          }
    },
    //get a contact form
    getContact: async (req, res) => {
        try {
           const contact = await contactModel.findById(req.params.id)
           res.json(contact)
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("server error");
          }
    },
    //add a contact form
    add: async (req, res) => {
        const {name, lastname, city, email, tel, message} = req.body;

        try {
          contact = new contactModel ({
            name,
            lastname,
            city, 
            email,
            tel, 
            message          
          })
          await contact.save();
          res.json(contact);
        } catch (error) {
          console.error(error.message);
          res.status(500).send("server error");
        }
    },
    //delete a contact form
    delete: async (req,res)=>{
        try {
          const contact = await contactModel.findByIdAndDelete(req.params.id)
          res.json(contact)
        }
        catch (error) {
         console.error(error.message);
         res.status(500).send("server error")
       }
    },
    //update a contact form
    update: async (req,res)=>{
        try {
          const contact = await contactModel.findByIdAndUpdate(req.params.id,req.body, {new:true})
            res.json(contact)
        }
        catch (error) {
          console.error(error.message);
          res.status(500).send("server error")
        }
      }
    }   