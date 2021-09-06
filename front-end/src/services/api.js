import axios from "axios";
const PORT  = 8000

const Api = axios.create({ baseURL: `http://localhost:${PORT}/anytimeFitness` });

 //add a contact form
 function addContact(name, lastname, city, email, tel, message) {
    return Api.post("/contact/add", {name, lastname, city, email, tel, message})
  }

  //get all contact forms
  function getContacts(){
    return Api.get("/contact/getAll");
  }

  //delete a contact form
  function delContact(id){
    return Api.delete(`/contact/delete/${id}`);
  }

  //update a contact form
  function updateContact(id) {
  return Api.put(`/contact/update/${id}`);
  }

  //add a post
  function addPost( 
    name,
    lastname,
    photo,
    speciality,
    description,
    soloprice,
    duoprice,
    trioprice,
    quatuorprice,
    transportprice,
    place,
    courses,
    level,
    adress,
    mobility,
    experience1,
    experience2,
    experience3,
    experience4,
    certification1,
    certification2,
    certification3,
    certification4,
    method) {
  return Api.post("/post/add", { 
            name,
            lastname,
            photo,
            speciality,
            description,
            soloprice,
            duoprice,
            trioprice,
            quatuorprice,
            transportprice,
            place,
            courses,
            level,
            adress,
            mobility,
            experience1,
            experience2,
            experience3,
            experience4,
            certification1,
            certification2,
            certification3,
            certification4,
            method})
  }

  //get all posts
  function getPosts(){
  return Api.get("/post/getAll");
 }

  //get a post
  function getPost(id){
  return Api.get(`/post/get/${id}`);
 }

  //delete a post
  function delPost(id){
  return Api.delete(`/post/delete/${id}`);
 }

  //update a post
  function updatePost(id) {
  return Api.put(`/post/update/${id}`);
 } 

 //get all users
 function getUsers(){
 return Api.get("/user/getAll");
 }

 //delete a user
 function delUser(id){
  return Api.delete(`/user/delete/${id}`);
 }


 //get all coachs
 function getCoachs(){
  return Api.get("/coach/getAll");
 }


 //delete a coach
 function delCoach(id){
  return Api.delete(`/coach/delete/${id}`);
 }


 //add a booking
 function addBooking(coachName,clientName,bookingDate,bookingTime,speciality,place,adress) {
  return Api.post("/booking/add", {coachName,clientName,bookingDate,bookingTime,speciality,place,adress})
}

 //get all bookings
 function getBookings(){
  return Api.get("/booking/getAll");
}

//delete a booking
function delBooking(id){
  return Api.delete(`/booking/delete/${id}`);
}



  export {addContact,getContacts,delContact,updateContact,addPost,getPosts,getPost,delPost,updatePost,getUsers,getCoachs,addBooking,getBookings,delBooking,delUser,delCoach}
  export default {addContact,getContacts,delContact,updateContact,addPost,getPosts,getPost,delPost,updatePost,getUsers,getCoachs,addBooking,getBookings,delBooking,delUser,delCoach}
