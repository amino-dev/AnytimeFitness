// database connexion
const mongoose = require('mongoose')
const db_connexion = () => {
    mongoose.connect('mongodb+srv://aminoo91:ptPAAdVXMm0UEFGC@cluster0.yqjt4.mongodb.net/AnytimeFitness?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    })
    .then (() => console.log('database connected'))
    .catch(() => console.log('error'))
}

module.exports = db_connexion