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


 //add a comment
 function addComment(fullName, course, commentaire) {
  return Api.post("/comment/add", {fullName, course, commentaire})
}

//get all comments
function getComments(){
  return Api.get("/comment/getAll");
}

//delete a contact form
function delComment(id){
  return Api.delete(`/comment/delete/${id}`);
}



  export {addContact,getContacts,delContact,updateContact,addPost,getPosts,getPost,delPost,updatePost,getUsers,getCoachs,addComment,getComments,delComment,delUser,delCoach}
  export default {addContact,getContacts,delContact,updateContact,addPost,getPosts,getPost,delPost,updatePost,getUsers,getCoachs,addComment,getComments,delComment,delUser,delCoach}
