const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const postSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
      },
    photo: {
        type : String,
        required: true
    },
    speciality: {
        type : String,
        required: true
    },
    description: {
        type : String,
        required: true
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
        type: Array, possibleValues: ['Individuel', 'En communité'],
        required: true
    },
    place: {
        type: Array, possibleValues: ['Chez vous', 'Chez lui', 'En plein air'],
        required: true
    },
    courses: {
        type: Array, possibleValues: ['Remise en forme','Fitness', 'Renforcement musculaire', 'Self-défense'],
        required: true
    },
    level: {
        type: Array, possibleValues: ['Enfants','Débutant', 'Intermédiaire'],
        required: true
    },
    adress: {
        type : String,
        required: true
    },
    mobility: {
        type : String,
        required: true  
    },
    experience: {
        type : String,
        required: true  
    },
    certifications: {
        type : String,
        required: true
    },
    method: {
        type : String,
        required: true
    },
    video: {
        type : String,
    }
  },
   {timestamps :true}
)

module.exports = post  = mongoose.model('post', postSchema)