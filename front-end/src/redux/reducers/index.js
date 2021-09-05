import {combineReducers} from "redux";
import {contactReducer} from "./contactReducers";
import {userAuthReducer} from "./userAuthReducers"
import {userRegisterReducer} from "./userRegisterReduers"
import {coachAuthReducer} from "./coachAuthReducers"
import {adminAuthReducer} from "./adminAuthReducers"
import {coachRegisterReducer} from "./coachRegisterReducers";
import {postReducer} from "./postReducers"
import {UsersReducer} from "./users-reducers"
import {CoachsReducer} from "./coachs-reducers"
import {bookingReducer} from "./bookingRducers"


export const rootReducer = combineReducers({
   contactReducer,
   auth: userAuthReducer,
   user : userRegisterReducer,
   coach : coachRegisterReducer,
   coachAuth: coachAuthReducer,
   adminAuth : adminAuthReducer, 
   postReducer,
   UsersReducer,
   CoachsReducer,
   bookingReducer,
   contactReducer

   // postDetails : postDetailsReducer,
   // product : productDetailsReducer

})