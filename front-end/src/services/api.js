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

  export {addContact,getContacts,delContact,updateContact}
  export default {addContact,getContacts,delContact,updateContact}
