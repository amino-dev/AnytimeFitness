import {addComment,getComments,delComment}   from "../../services/api"
import { GET_COMMENTS, ADD_COMMENT, DELETE_COMMENT, UPDATE_COMMENT } from "../../shared/apiUrls";
import axios from 'axios'

//add a comment form
export const addNewComment= (  
    fullName,
    course,
    commentaire
    ) => async (dispatch) =>{
    try{
        const res=await addComment (
            fullName,
            course,
            commentaire
        );
        dispatch ({
            type:ADD_COMMENT,
            payload:res.data
        })
        console.log("payload")

    }
    catch (error) {
              console.log(error);
    }
}
//get all comments
export const getAllcomments=()=>async (dispatch)=> {
try{
const res=await getComments ();
dispatch({
    type:GET_COMMENTS,
    payload:res.data
 })
}
catch (error) {
  console.log(error);
 }
}

//delete a Comment
  export const deleteComment = (id)=> async (dispatch) => {
    try {
      await delComment(id);
      dispatch({
        type:DELETE_COMMENT,
        payload:id
    })
      console.log("delete")
      dispatch(getAllcomments);
    } catch (error) {
      console.log(error);
    }
  };

//update a comment 
export const updateComment = (
    id,
    fullName,
    course,
    commentaire) => async dispatch => {
    try {
      const res = await axios.put(`http://localhost:8000/anytimeFitness/comment/update/${id}`,{  
      fullName,
      course,
      commentaire}) 
       
      dispatch({
        type: UPDATE_COMMENT, 
        payload: res.data
      });
      console.log("update")
    } catch (error) {
      console.log(error);
    }
  };
