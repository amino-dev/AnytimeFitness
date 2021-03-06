const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const postSchema = new Schema({
    // userId: {
    //     type: mongoose.Types.ObjectId,
    // },
    name: {
        type : String,
        // required: true,
    },
    lastname: {
        type : String,
        // required: true,
    },
    photo: {
        type : String,
        // required: true,
    },
    speciality: {
        type : String,
        // required: true,
    },
    description: {
        type : String,
        // required: true
    },
    soloprice: {
        type : Number,
        // required: true
    },
    duoprice: {
        type : Number,
        // required: true
    },
    trioprice: {
        type : Number,
        // required: true
    },
    quatuorprice: {
        type : Number,
        // required: true
    },
    transportprice: {
        type : Number,
        // required: true
    },
    place: {
        type : String,
        // type: Array, possibleValues: ['Chez vous', 'Chez lui', 'En plein air'],
        // required: true
    },
    courses: {
        type : String,
        // type: Array, possibleValues: ['Remise en forme','Fitness', 'Renforcement musculaire', 'Self-défense'],
        // required: true
    },
    level: {
        type : String,
        // type: Array, possibleValues: ['Enfants','Débutant', 'Intermédiaire'],
        // required: true
    },
    adress: {
        type : String,
        // required: true
    },
    mobility: {
        type : String,
        // required: true
    },
    experience1: {
        type : String,
        // required: true
    },
    experience2: {
        type : String,
        // required: true
    },
    experience3: {
        type : String,
        // required: true
    },
    experience4: {
        type : String,
        // required: true
    },
    certification1: {
        type : String,
        // required: true
    },
    certification2: {
        type : String,
        // required: true
    },
    certification3: {
        type : String,
        // required: true
    },
    certification4: {
        type : String,
        // required: true
    },
    method: {
        type : String,
        // required: true
    },
    video: {
        type : String,
    }
  },
   {timestamps :true}
)

module.exports = post  = mongoose.model('post', postSchema)