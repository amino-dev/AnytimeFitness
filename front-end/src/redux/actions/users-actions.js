import { DELETE_USER, GET_USERS, UPDATE_USER } from "../../shared/apiUrls"
import {delUser, getUsers}   from "../../services/api"
import axios from "axios";

//get all users
export const getAllUsers=()=>async (dispatch)=> {
    try{
    const res=await getUsers ();
    dispatch({
        type:GET_USERS,
        payload:res.data
     })
    }
    catch (error) {
      console.log(error);
     }
    }

//delete a user
export const deleteUser = (id)=> async (dispatch) => {
  try {
    await delUser(id);
    dispatch({
      type:DELETE_USER,
      payload:id
  })
    console.log("delete")
    dispatch(getAllUsers);
  } catch (error) {
    console.log(error);
  }
};

//update a user
export const UpdateUser = (
  id,
  name,
  lastname,
  email,
  city,
  tel) => async dispatch => {
  try {
    const res = await axios.put(`http://localhost:8000/anytimeFitness/user/update/${id}`,{  
      name,
      lastname,
      email,
      city,
      tel}) 
     
    dispatch({
      type: UPDATE_USER, 
      payload: res.data
    });
    console.log("update")
  } catch (error) {
    console.log(error);
  }
};