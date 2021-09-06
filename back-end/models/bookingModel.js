const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const bookingSchema = new Schema({
    coachName: {
        type : String,
        required: true
    },
    clientName: {
        type : String,
        required: true
    },
    date:{
        type: Date, 
        default: Date.now
    },
    bookingDate:{
        type: Date, 
        required : true
    },
    bookingTime:{
        type: String, 
        required : true
    },
    speciality: {
        type : String,
        required: true
    },
    place: {
        type : String,
       required: true
    },
    adress: {
        type : String,
       required: true
    },
    status: {
        type : String,
        default: "En attente",
        enum: ["En attente" , "confirmé"]
    }
  },
   {timestamps :true}
)

module.exports = booking  = mongoose.model('booking', bookingSchema)