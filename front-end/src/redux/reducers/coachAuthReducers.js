const inisialState ={
    token:null,
    user:{
        fullname:'',
        tel:'',
        email:''
    },
    authenticate:false,
    authenticating:false 
}

 export const coachAuthReducer = (state =inisialState,action)=>{
  switch (action.type){
     case "LOGIN_COACH_FAILED":
        state = {
            ...state,
             authenticating:false

      
           }
           break
           case 'LOGIN_COACH_SUCCESS':
               state ={
                   ...state,
                   user:action.payload.user,
                   token:action.payload.token,
                   authenticate:true
               }
               
               break
                
                   case 'LOGOUT_COACH_SUCCESS':
                    state={
                        ...inisialState
                    }
                    break
                    
           default:
        
        }

 return state
};