// import React, {useEffect,useState} from 'react'
// import {Button} from 'react-bootstrap'
// import {FaEye} from 'react-icons/fa'
// import {useDispatch, useSelector } from 'react-redux'
// import {getAllposts} from "../../../../redux/actions/postActions"
// import { Link } from 'react-router-dom'
// import "../css/coachs-page/coachs.css"
// import {getProductDetailsById } from "../../../../redux/actions/postActions";


// export default function PostDetail({props}) {

//    const dispatch = useDispatch();
//   const product = useSelector((state) => state.product);

//   useEffect(() => {
//    const { productId } = props.match.params;
//    console.log(props);
//    const payload = {
//      params: {
//        productId,
//      },
//    };
//    dispatch(getProductDetailsById(payload));
//  }, []);


//     return (
//       <div>

// <img
//                 src={product.productDetails.mobility}
                
//               />
            
          
                        
             
//       </div>       
//     )
// }
