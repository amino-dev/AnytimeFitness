import { GET_COMMENTS,ADD_COMMENT, DELETE_COMMENT, UPDATE_COMMENT} from "../../shared/apiUrls";
const initialState={
  datas : [],
  loading:true
} 

export const commentReducer = ( state = initialState, action) => {
  const { type, payload } = action;
  switch (type){
    case GET_COMMENTS:
      
      return {
        ...state,
        datas: payload,
        loading: false
      };
    case ADD_COMMENT:
     return {
      ...state,
      datas: [...state.datas, payload ]

     };
 
     case DELETE_COMMENT:
      return {
        ...state,
        datas: state.datas.filter(
          data => data._id !== payload
        ),
        loading: false
      };
      case UPDATE_COMMENT:
        return {
          ...state,
          datas: state.datas.map(data =>
            data._id === payload._id ? payload : data
          )
        };
  }
  return state
};