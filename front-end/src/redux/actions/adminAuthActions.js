import {adminLogin} from "../../services/axios"
import axios from "axios"
 

export const AdminLogin =(user)=> async(dispatch) =>{
    
    try{
     const res =  await adminLogin(user)
            if (res.status === 200){
              
                const {token,user} = res.data
                console.log(token)
                localStorage.setItem('adminToken',token)
                localStorage.setItem('user',JSON.stringify(user))
                dispatch({
                    type:'LOGIN_ADMIN_SUCCESS',
                    payload:{
                        token,user
                    }     
                })
             }else{
                if(res.status === 400){
                    dispatch({
                        type:"LOGIN_ADMIN_FAILED",
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

export const isAdminLoggedIn = () =>{
    return async dispatch =>{
        const token = localStorage.getItem('adminToken')
        if(token){
            const user = JSON.parse(localStorage.getItem('user'))
          dispatch({
                type:'LOGIN_ADMIN_SUCCESS',
                payload:{
                    token,user
                }
            })
        }else{
            dispatch({type:'LOGIN_ADMIN_FAILED',
                payload:{
                    
                    error:'Failed to login'
                }
            })
        }
    }

}

export const adminSignout = () =>{
    return async dispatch =>{
        localStorage.clear()
        dispatch({
            type:'LOGOUT__ADMIN_REQUEST'
        })
    }
}
