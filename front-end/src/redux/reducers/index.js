import { combineReducers} from "redux";
import {contactReducer} from "./contactReducers";
import {userAuthReducer} from "./userAuthReducers"
import {userRegisterReducer} from "./userRegisterReduers"
import {coachAuthReducer} from "./coachAuthReducers"
import {adminAuthReducer} from "./adminAuthReducers"
import {coachRegisterReducer} from "./coachRegisterReducers";
// import { postReducer,postDetailsReducer,productDetailsReducer} from "./postReducers"3
import { postReducer} from "./postReducers"

export const rootReducer = combineReducers({
   contactReducer,
   auth: userAuthReducer,
   user : userRegisterReducer,
   coach : coachRegisterReducer,
   coachAuth: coachAuthReducer,
   adminAuth : adminAuthReducer, 
   postReducer,
   // postDetails : postDetailsReducer,
   // product : productDetailsReducer

})