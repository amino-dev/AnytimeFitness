const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const commentSchema = new Schema({
    // userId: {
    //     type: mongoose.Types.ObjectId,
    // },
    fullName: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    date:{
        type: Date, 
        default: Date.now
    },
    commentaire: {
        type : String,
        required: true
    }
  },
   {timestamps :true}
)

module.exports = comment  = mongoose.model('comment', commentSchema)