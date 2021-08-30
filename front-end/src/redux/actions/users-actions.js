import { DELETE_USER, GET_USERS } from "../../shared/apiUrls"
import {delUser, getUsers}   from "../../services/api"

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