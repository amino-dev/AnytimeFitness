import { combineReducers} from "redux";
import {contactReducer} from "./contactReducers";
import {userAuthReducer} from "./userAuthReducers"
import {userRegisterReducer} from "./userRegisterReduers"
import {coachAuthReducer} from "./coachAuthReducers"
import {coachRegisterReducer} from "./coachRegisterReducers";

export const rootReducer = combineReducers({
   contactReducer,
   auth: userAuthReducer,
   user : userRegisterReducer,
   coach : coachRegisterReducer,
   coachAuth: coachAuthReducer
})