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
const User = require("./routes/auth/userRoute")
const Admin = require("./routes/auth/adminRoute")
const Coach = require("./routes/auth/coachRoute")
const Contact = require("./routes/contactRoute")
const Post = require("./routes/postRoute")
const Booking = require("./routes/bookingRoute")


// // //Router Middleware
app.use('/anytimeFitness/user',User)
app.use('/anytimeFitness/admin',Admin)
app.use('/anytimeFitness/coach',Coach)
app.use('/anytimeFitness/contact',Contact)
app.use('/anytimeFitness/post',Post)
app.use('/anytimeFitness/booking',Booking)

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