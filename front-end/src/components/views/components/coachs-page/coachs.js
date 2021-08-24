import React, {useEffect,useState} from 'react'
import {Button} from 'react-bootstrap'
import {FaEye} from 'react-icons/fa'
import {useDispatch, useSelector } from 'react-redux'
import {getAllposts} from "../../../../redux/actions/postActions"
import { Link } from 'react-router-dom'
import "../css/coachs-page/coachs.css"


export default function CoachsPosts() {

     const post = useSelector(state => state.postReducer.datas)
 
     const dispatch = useDispatch()
     useEffect(() => {
      dispatch(getAllposts())
         }, [dispatch])
      console.log("my data",post)
      
    return (
      <div className="coachs-card container" >

             {post.map((coach,key ) => (
                  <div className="coach-card mb-5" key={key}>
                  <div className="position-relative">
                    <div>
                     <figure className="hover-img">
                      <img className="card-img" variant="top" src={coach.photo} />
                      <figcaption>
                        <div className="">
                         <h5 className="text-center">{coach.speciality}</h5>
                         <div className="d-flex justify-content-center mb-2">
                         <Link to={`/anytimeFitness/coach/${coach._id}`}>
                           <Button variant=""><FaEye className="icons"/></Button>
                         </Link>
                         </div> 
                        </div>
                      </figcaption>
                      </figure>
                    </div>
                  </div>
                 </div>
                  // <div className="mb-5" key={key}>
                  //   <Card style={{ width: '18rem' }}>
                  //     <Card.Img variant="top" className="pt-3" src={coach.photo}/>
                  //     <Card.Body>
                  //       <Card.Title>{coach.speciality}</Card.Title>
                  //     </Card.Body>
                  //   </Card>           
                  // </div>
                ))
              }
        </div>
            
    )
}
