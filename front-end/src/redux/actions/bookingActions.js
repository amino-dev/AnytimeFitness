import {addBooking,getBookings,delBooking}   from "../../services/api"
import { GET_BOOKINGS, ADD_BOOKING, DELETE_BOOKING, UPDATE_BOOKING } from "../../shared/apiUrls";
import axios from 'axios'

//add a booking
export const addNewBooking= (  
  coachName,
  clientName,
  bookingDate,
  bookingTime,
  speciality,
  place,
  adress
    ) => async (dispatch) =>{
    try{
        const res=await addBooking(
          coachName,
          clientName,
          bookingDate,
          bookingTime,
          speciality,
          place,
          adress
        );
        dispatch ({
            type:ADD_BOOKING,
            payload:res.data
        })
        console.log("payload")

    }
    catch (error) {
              console.log(error);
    }
}
//get all bookings
export const getAllBookings=()=>async (dispatch)=> {
try{
const res=await getBookings ();
dispatch({
    type:GET_BOOKINGS,
    payload:res.data
 })
}
catch (error) {
  console.log(error);
 }
}

//delete a booking
  export const deleteBooking= (id)=> async (dispatch) => {
    try {
      await delBooking(id);
      dispatch({
        type:DELETE_BOOKING,
        payload:id
    })
      console.log("delete")
      dispatch(getAllBookings);
    } catch (error) {
      console.log(error);
    }
  };

//update a booking
export const updateBooking= (
    id,
    bookingDate,
    bookingTime,
    speciality,
    place,
    status) => async dispatch => {
    try {
      const res = await axios.put(`http://localhost:8000/anytimeFitness/booking/update/${id}`,{  
        bookingDate,
        bookingTime,
        speciality,
        place,
        status}) 
       
      dispatch({
        type: UPDATE_BOOKING, 
        payload: res.data
      });
      console.log("update")
    } catch (error) {
      console.log(error);
    }
  };
