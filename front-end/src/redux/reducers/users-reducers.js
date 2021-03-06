import { DELETE_USER, GET_USERS, UPDATE_USER} from "../../shared/apiUrls";
const initialState={
  datas : [],
  loading:true
} 

export const UsersReducer = ( state = initialState, action) => {
  const { type, payload } = action;
  switch (type){
    case GET_USERS:
      
      return {
        ...state,
        datas: payload,
        loading: false
      };
    case DELETE_USER:
        return {
          ...state,
          datas: state.datas.filter(
            data => data._id !== payload
          ),
          loading: false
      };
    case UPDATE_USER:
        return {
          ...state,
          datas: state.datas.map(data =>
            data._id === payload._id ? payload : data
          )
        };
  }
  return state
};