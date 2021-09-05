import { GET_BOOKINGS,ADD_BOOKING, DELETE_BOOKING, UPDATE_BOOKING} from "../../shared/apiUrls";
const initialState={
  datas : [],
  loading:true
} 

export const bookingReducer = ( state = initialState, action) => {
  const { type, payload } = action;
  switch (type){
    case GET_BOOKINGS:
      
      return {
        ...state,
        datas: payload,
        loading: false
      };
    case ADD_BOOKING:
     return {
      ...state,
      datas: [...state.datas, payload ]

     };
 
     case DELETE_BOOKING:
      return {
        ...state,
        datas: state.datas.filter(
          data => data._id !== payload
        ),
        loading: false
      };
      case UPDATE_BOOKING:
        return {
          ...state,
          datas: state.datas.map(data =>
            data._id === payload._id ? payload : data
          )
        };
  }
  return state
};