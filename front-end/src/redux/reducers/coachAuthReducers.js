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
    const { type, payload } = action;

  switch (type){
     case "LOGIN_COACH_FAILED":
        state = {
            ...state,
             authenticating:false
           }
           break
           case 'LOGIN_COACH_SUCCESS':
               state ={
                   ...state,
                   user:payload.user,
                   token:payload.token,
                   authenticate:true
               }
               
               break
                
                   case 'LOGOUT_COACH_SUCCESS':
                    state={
                        ...inisialState
                    }
                    break
                    case 'UPDATE_PROFILE':
                        state={
                            ...state,
                            user: state.user.map(data =>
                              data._id === payload._id ? payload.user: data
                            )
                        }
           default:
        
        }

 return state
};