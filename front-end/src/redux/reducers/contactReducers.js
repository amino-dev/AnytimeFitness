import { GET_CONTACTS,ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT} from "../../shared/apiUrls";
const initialState={
  datas : [],
  loading:true
} 

 export const contactReducer = ( state = initialState, action) => {
  const { type, payload } = action;
  switch (type){
    case GET_CONTACTS:
      
      return {
        ...state,
        datas: payload,
        loading: false
      };
    case ADD_CONTACT:
     return {
      ...state,
      datas: [...state.datas, payload]

     };
     case DELETE_CONTACT:
      return {
        ...state,
        datas: state.datas.filter(
          data => data._id !== payload
        ),
        loading: false
      };
      case UPDATE_CONTACT:
        return {
          ...state,
          datas: state.datas.map(data =>
            data._id === payload._id ? payload : data
          )
        };
  }
  return state
};