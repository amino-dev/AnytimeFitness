const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const commentSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
    },
    course: {
        type: Array, possibleValues: ['Remise en forme','Fitness', 'Renforcement musculaire', 'Self-défense'],
        required: true
    },
    date: {
        type : Date,
        required: true
    },
    commentaire: {
        type : String,
        required: true
    }
  },
   {timestamps :true}
)

module.exports = comment  = mongoose.model('comment', commentSchema)