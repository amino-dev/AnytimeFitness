import React from 'react'
import {Route,Redirect} from 'react-router-dom'
const CoachRoute = ({component:Component,...rest}) => {
    
    return (
        <div>

           <Route {...rest} component={(props)=>{
               const token = window.localStorage.getItem('coachToken')
               if(token){
                   return <Component {...props} />
               }else{
                 return  <Redirect to={`/`} />
               }
           }} /> 
        </div>
    )
}

export default CoachRoute