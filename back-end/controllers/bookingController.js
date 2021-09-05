const bookingModel = require('../models/bookingModel')

module.exports = {
   //get all bookings
    getAll: async (req, res) => {
        try {
            const booking = await bookingModel.find();
            res.json(booking);
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("server error");
          }
    },
    //get a booking
    getBooking: async (req, res) => {
        try {
           const booking = await bookingModel.findById(req.params.id)
           res.json(booking)
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("server error");
          }
    },
    //add a booking
    add: async (req, res) => {
        const {coachName,clientName,bookingDate,bookingTime,speciality,place,adress} = req.body;
        try {
          booking = new bookingModel ({
            coachName,
            clientName,
            bookingDate,
            bookingTime,
            speciality,
            place,
            adress          
          })
          await booking.save();
          res.json(booking);
        } catch (error) {
          console.error(error.message);
          res.status(500).send("server error");
        }
    },
    //delete a booking
    delete: async (req,res)=>{
        try {
          const booking = await bookingModel.findByIdAndDelete(req.params.id)
          res.json(booking)
        }
        catch (error) {
         console.error(error.message);
         res.status(500).send("server error")
       }
    },
    //update a booking
    update: async (req,res)=>{
        try {
          const booking = await bookingModel.findByIdAndUpdate(req.params.id,req.body, {new:true, useFindAndModify: false})
            res.json(booking)
        }
        catch (error) {
          console.error(error.message);
          res.status(500).send("server error")
        }
      }
    }   