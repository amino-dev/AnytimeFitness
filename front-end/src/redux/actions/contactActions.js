import {addContact,getContacts,delContact}   from "../../services/api"
import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "../../shared/apiUrls";
import axios from 'axios'

//add a contact form
export const addNewContact= (name, lastname, city, email, tel, message) => async (dispatch) =>{
    try{
        const res=await addContact (name, lastname, city, email, tel, message);
        dispatch ({
            type:ADD_CONTACT,
            payload:res.data
        })
        console.log("payload")

    }
    catch (error) {
              console.log(error);
    }
}
//get all contact forms
export const getAllContacts=()=>async (dispatch)=> {
try{
const res=await getContacts ();
dispatch({
    type:GET_CONTACTS,
    payload:res.data
 })
}
catch (error) {
  console.log(error);
 }
}

//delete a contact form
  export const deleteContact = (id)=> async (dispatch) => {
    try {
      await delContact(id);
      dispatch({
        type:DELETE_CONTACT,
        payload:id
    })
      console.log("delete")
      dispatch(getAllContacts);
    } catch (error) {
      console.log(error);
    }
  };

//update a contact form
export const updateContact = (id, name, lastname, city, email, tel, message) => async dispatch => {
    try {
      const res = await axios.put(`http://localhost:6000/anytimeFitness/contact/update/${id}`,{name, lastname, city, email, tel, message}) 
       
      dispatch({
        type: UPDATE_CONTACT, 
        payload: res.data
      });
      console.log("update")
    } catch (error) {
      console.log(error);
    }
  };