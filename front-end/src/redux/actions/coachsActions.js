import { DELETE_COACH, GET_COACHS, UPDATE_COACH } from "../../shared/apiUrls"
import {getCoachs, delCoach}   from "../../services/api"
import axios from 'axios'

//get all users
export const getAllCoachs=()=>async (dispatch)=> {
    try{
    const res=await getCoachs ();
    dispatch({
        type:GET_COACHS,
        payload:res.data
     })
    }
    catch (error) {
      console.log(error);
    }
}

//delete a caoch
export const deleteCoach = (id)=> async (dispatch) => {
  try {
    await delCoach(id);
    dispatch({
      type:DELETE_COACH,
      payload:id
  })
    console.log("delete")
    dispatch(getAllCoachs);
  } catch (error) {
    console.log(error);
  }
};

//update a coach
export const UpdateCoach = (
  id,
  name,
  lastname,
  email,
  city,
  tel,
  status) => async dispatch => {
  try {
    const res = await axios.put(`http://localhost:8000/anytimeFitness/coach/update/${id}`,{  
      name,
      lastname,
      email,
      city,
      tel,
      status}) 
     
    dispatch({
      type: UPDATE_COACH, 
      payload: res.data
    });
    console.log("update")
  } catch (error) {
    console.log(error);
  }
};