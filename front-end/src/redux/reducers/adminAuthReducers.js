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

 export const adminAuthReducer = (state =inisialState,action)=>{  
    const { type, payload } = action;

  switch (type){
     case "LOGIN_ADMIN_FAILED":
        state = {
            ...state,
             authenticating:false
           }
           break
           case 'LOGIN_ADMIN_SUCCESS':
               state ={
                   ...state,
                   user:payload.user,
                   token:payload.token,
                   authenticate:true
               }
               
               break
                
                   case 'LOGOUT_ADMIN_SUCCESS':
                    state={
                        ...inisialState
                    }
               break
        }

 return state
};