import { DELETE_COACH, GET_COACHS, UPDATE_COACH} from "../../shared/apiUrls";
const initialState={
  datas : [],
  loading:true
} 

export const CoachsReducer = ( state = initialState, action) => {
  const { type, payload } = action;
  switch (type){
    case GET_COACHS:
      
      return {
        ...state,
        datas: payload,
        loading: false
      };
    case DELETE_COACH:
      return {
          ...state,
          datas: state.datas.filter(
            data => data._id !== payload
          ),
          loading: false
      };
    case UPDATE_COACH:
        return {
          ...state,
          datas: state.datas.map(data =>
            data._id === payload._id ? payload : data
          )
        };
  }
  return state
};