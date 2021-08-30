import { DELETE_COACH, GET_COACHS } from "../../shared/apiUrls"
import {getCoachs, delCoach}   from "../../services/api"

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