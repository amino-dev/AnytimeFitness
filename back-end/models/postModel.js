const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const postSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
    },
    photo: {
        type : String,
        required: true,
        max: 5000
    },
    speciality: {
        type : String,
        required: true,
        max: 5000
    },
    description: {
        type : String,
        required: true,
        max: 5000
    },
    soloprice: {
        type : Number,
        required: true
    },
    duoprice: {
        type : Number,
        required: true
    },
    trioprice: {
        type : Number,
        required: true
    },
    quatuorprice: {
        type : Number,
        required: true
    },
    transportprice: {
        type : Number,
        required: true
    },
    time: {
        type : Number,
        required: true
    },
    coursetype: {
        type : String,
        // type: Array, possibleValues: ['Individuel', 'En communité'],
        required: true,
        max: 5000
    },
    place: {
        type : String,
        // type: Array, possibleValues: ['Chez vous', 'Chez lui', 'En plein air'],
        required: true,
        max: 5000
    },
    courses: {
        type : String,
        // type: Array, possibleValues: ['Remise en forme','Fitness', 'Renforcement musculaire', 'Self-défense'],
        required: true,
        max: 5000
    },
    level: {
        type : String,
        // type: Array, possibleValues: ['Enfants','Débutant', 'Intermédiaire'],
        required: true,
        max: 5000
    },
    adress: {
        type : String,
        required: true,
        max: 5000
    },
    mobility: {
        type : String,
        required: true,
        max: 5000 
    },
    experience: {
        type : String,
        required: true,
        max: 5000
    },
    certifications: {
        type : String,
        required: true,
        max: 5000
    },
    method: {
        type : String,
        required: true,
        max: 5000
    },
    video: {
        type : String,
    }
  },
   {timestamps :true}
)

module.exports = post  = mongoose.model('post', postSchema)