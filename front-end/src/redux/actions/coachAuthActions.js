import {coachLogin} from "../../services/axios"
import axios from "axios"
 

export const CoachLogin =(user)=> async(dispatch) =>{
    
    try{
     const res =  await coachLogin(user)
            if (res.status === 200){
              
                const {token,user} = res.data
                console.log(token)
                localStorage.setItem('coachToken',token)
                localStorage.setItem('user',JSON.stringify(user))
                dispatch({
                    type:'LOGIN_COACH_SUCCESS',
                    payload:{
                        token,user
                    }
                   
                })
             }else{
                if(res.status === 400){
                    dispatch({
                        type:"LOGIN_COACH_FAILED",
                        payload:{error:res.data.error}
                    })
                }
    
            }
          
            console.log("payload")
       
       
    }
    catch (error) {
              console.log(error);
             }
}

export const isCoachLoggedIn = () =>{
    return async dispatch =>{
        const token = localStorage.getItem('coachToken')
        if(token){
            const user = JSON.parse(localStorage.getItem('user'))
          dispatch({
                type:'LOGIN_COACH_SUCCESS',
                payload:{
                    token,user
                }
            })
        }else{
            dispatch({type:'LOGIN_COACH_FAILED',
                payload:{
                    
                    error:'Failed to login'
                }
            })
        }
    }

}

export const coachSignout = () =>{
    return async dispatch =>{
        localStorage.clear()
        dispatch({
            type:'LOGOUT__ADMIN_REQUEST'
        })
    }
}

//update a profile
export const Update = (id,name, lastname, city,tel,password,email) => async dispatch => {
    try {
      const res = await axios.put(`http://localhost:8000/anytimeFitness/user/update/${id}`,{id,name, lastname, city,tel,password,email}) 
      
      dispatch({
        type: "UPDATE_PROFILE", 
        payload: res.data
      });
      console.log("update")
    } catch (error) {
      console.log(error);
    }
  };

  export default Update

//   //delete a product
//   export const deleteCoach = (id)=> async (dispatch) => {
//     try {
//       await delProduct(id);
//       dispatch({
//         type:"DELETE_COACH",
//         payload:id
//     })
//       console.log("delete")
//     } catch (error) {
//       console.log(error);
//     }
//   };
