const cors = require("cors");
const exp = require("express");
const bp = require("body-parser");


// Bring in the app constants
const { PORT } = require("./config/config");

// Initialize the application
const app = exp();

// Middlewares
app.use(cors());
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

// Importing routes
// const User = require("./routes/userRoute")
// const Coach = require("./routes/coachRoute")
// const Form = require("./routes/formRoute")
// const Post = require("./routes/postRoute")
// const Comment = require("./routes/commentRoute")
// const Reservation = require("./routes/reservationRoute")


// //Router Middleware
// app.use('/anytimeFitness/user',User)
// app.use('/anytimeFitness/coach',Coach)
// app.use('/anytimeFitness/form',Form)
// app.use('/anytimeFitness/post',Post)
// app.use('/anytimeFitness/comment',Comment)
// app.use('/anytimeFitness/reservation',Reservation)

// import database
const db = require('./config/db')
db()


// connexion server
app.listen(PORT, (err)=> {
    if (err) {
        console.log("Error when running the server")
    } else {
        console.log(`Server listening on port ${PORT}!`)
    }
})