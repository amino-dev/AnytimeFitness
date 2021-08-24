import React, {useEffect,useState} from 'react'
import {Button} from 'react-bootstrap'
import {FaEye} from 'react-icons/fa'
import {useDispatch, useSelector } from 'react-redux'
import {getAllposts} from "../../../../redux/actions/postActions"
import { Link } from 'react-router-dom'
import "../css/coachs-page/coachs.css"
import {listPostDetails} from "../../../../redux/actions/postActions";


export default function PostDetail({match}) {

   const dispatch = useDispatch();

   const postDetails = useSelector((state) => state.postDetails);

   useEffect(() => {
    if (!postDetails._id || postDetails._id !== match.params.id) {
      dispatch(listPostDetails(match.params.id));
    }
    });

    return (
      <div  >
          {postDetails.mobility}
             
      </div>
            
    )
}
