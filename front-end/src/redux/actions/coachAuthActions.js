import {coachLogin} from "../../services/axios"
 

export const CoachLogin =(user)=> async(dispatch) =>{
    
    try{
        
       
     const res =  await coachLogin(user)
            if (res.status === 200){
              
                const {token,user} = res.data
                console.log(token)
                localStorage.setItem('token',token)
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
        const token = localStorage.getItem('token')
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