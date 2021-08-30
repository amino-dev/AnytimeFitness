import { GET_POSTS, GET_POST,ADD_POST, DELETE_POST, UPDATE_POST} from "../../shared/apiUrls";
const initialState={
  datas : [],
  loading:true
} 

export const postReducer = ( state = initialState, action) => {
  const { type, payload } = action;
  switch (type){
    case GET_POSTS:
      
      return {
        ...state,
        datas: payload,
        loading: false
      };
    case GET_POST:
      
      return {
        ...state,
        datas: state.datas.filter(
          data => data._id !== payload
        ),
      };
    case ADD_POST:
     return {
      ...state,
      datas: [...state.datas, payload ]

     };
 
     case DELETE_POST:
      return {
        ...state,
        datas: state.datas.filter(
          data => data._id !== payload
        ),
        loading: false
      };
      case UPDATE_POST:
        return {
          ...state,
          datas: state.datas.map(data =>
            data._id === payload._id ? payload : data
          )
        };
  }
  return state
};


// export const postDetailsReducer = (
//   state = { post: { reviews: [] } },
//   action
// ) => {
//   switch (action.type) {
//     case "POST_DETAILS_REQUEST":
//       return { ...state, loading: true }
//     case "POST_DETAILS_SUCCESS":
//       return { loading: false, post: action.payload }
//     case "POST_DETAILS_FAIL":
//       return { loading: false, error: action.payload }
//     default:
//       return state
//   }
// }


// const initState = {
//   productDetails: {}
// };

// export  const productDetailsReducer =  (state = initState, action) => {
//   switch (action.type) {
//     case "GET_PRODUCT_DETAILS_BY_ID_REQUEST":
//       state = {
//         ...state,
//         loading: true,
//       };
//       break;
//     case "GET_PRODUCT_DETAILS_BY_ID_SUCCESS":
//       state = {
//         ...state,
//         loading: false,
//         productDetails: action.payload.productDetails,
//       };
//       break;
//     case "GET_PRODUCT_DETAILS_BY_ID_FAILURE":
//       state = {
//         ...state,
//         loading: false,
//         error: action.payload.error,
//       };
//       break;
//   }

//   return state;
// };