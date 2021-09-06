import {addPost,getPosts,delPost,getPost}   from "../../services/api"
import { GET_POSTS, ADD_POST, DELETE_POST, UPDATE_POST } from "../../shared/apiUrls";
import axios from 'axios'

//add a post
export const addNewPost= (  
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
  method
    ) => async (dispatch) =>{
    try{
        const res=await addPost (
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
          method
        );
        dispatch ({
            type:ADD_POST,
            payload:res.data
        })
        console.log("payload")

    }
    catch (error) {
              console.log(error);
    }
}
//get all posts
export const getAllposts=()=>async (dispatch)=> {
try{
const res=await getPosts ();
dispatch({
    type:GET_POSTS,
    payload:res.data
 })
}
catch (error) {
  console.log(error);
 }
}

//get a post
export const getOnePost=(id)=> async (dispatch)=> {
  try{
  const res = await axios.get(`http://localhost:8000/anytimeFitness/post/get/${id}`)
  dispatch({
      type:"GET_PUBID_SUCCEDED",
      payload:res.data 

  })
  console.log('getPubById',res.data)
  }
  catch (error) {
    console.log(error);
                }
  }


//delete a post
  export const deletePost = (id)=> async (dispatch) => {
    try {
      await delPost(id);
      dispatch({
        type:DELETE_POST,
        payload:id
    })
      console.log("delete")
      dispatch(getAllposts);
    } catch (error) {
      console.log(error);
    }
  };

//update a post 
export const updatePost = (
          id,
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
          method) => async dispatch => {
    try {
      const res = await axios.put(`http://localhost:8000/anytimeFitness/post/update/${id}`,{
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
       
      dispatch({
        type: UPDATE_POST, 
        payload: res.data
      });
      console.log("update")
    } catch (error) {
      console.log(error);
    }
  };

//   export const listPostDetails = (id) => async (dispatch) => {
//     try {
//       dispatch({ type: "POST_DETAILS_REQUEST" })
  
//       const { data } = await axios.get(`http://localhost:8000/anytimeFitness/post/get/${id}`)
  
//       dispatch({
//         type: "POST_DETAILS_SUCCESS",
//         payload: data,
//       })
//     } catch (error) {
//       dispatch({
//         type: "POST_DETAILS_FAIL",
//         payload:
//           error.response && error.response.data.message
//             ? error.response.data.message
//             : error.message,
//       })
//     }
//   }

//   export const getProductDetailsById = (payload) => {
//     return async dispatch => {
//         dispatch({ type: "GET_PRODUCT_DETAILS_BY_ID_REQUEST" });
//         let res;
//         try {
//             const { productId } = payload.params;
//             res = await axios.get(`/http://localhost:8000/anytimeFitness/post/get/${productId}`);
//             console.log(res);
//             dispatch({
//                 type: "GET_PRODUCT_DETAILS_BY_ID_SUCCESS",
//                 payload: { productDetails: res.data.product }
//             });

//         } catch(error) {
//             console.log(error);
//             dispatch({
//                 type: "GET_PRODUCT_DETAILS_BY_ID_FAILURE",
//                 payload: { error: res.data.error }
//             });
//         }

//     }
// }