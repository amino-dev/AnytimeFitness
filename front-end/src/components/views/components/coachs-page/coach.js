import React, {useEffect,useState} from 'react'
import {Button,Card, Row, Col,Form, FormControl} from 'react-bootstrap'
import {FaEye} from 'react-icons/fa'
import {useDispatch, useSelector } from 'react-redux'
import {getAllposts,getOnePost} from "../../../../redux/actions/postActions"
import { Link } from 'react-router-dom'
import "../css/coachs-page/coachs.css"
import {getProductDetailsById } from "../../../../redux/actions/postActions";
import logo from "../../../../img/coach-1.png"

export default function CoachsPosts({}) {

const posts = useSelector(state => state.postReducer.datas)


const auth = useSelector((state) => state.auth);

const dispatch = useDispatch()
useEffect(() => {
 dispatch(getAllposts())
    }, [dispatch])
 console.log("my data",posts)

 const getItem =(id)=>{
  dispatch (getOnePost(id) )
}
 const [search, setSearch]= useState("")
 const searchCoach =(event)=> {
 let input = event.target.value
   setSearch(input)}

    return (
      <div className="container">
      <h3 className="my-5 text-center">NOS COACHS</h3>
      <Form inline className="search">
         <FormControl type="text" placeholder="Cherchez un coach par specialité" onChange={(searchCoach)} className=""/>
      </Form>
      <div className="coachs-card container mt-5">
      {Object.keys(posts).filter((id) => {
      if (search === "") {
        return id
      } else if (posts[id].speciality.toLowerCase().includes(search.toLowerCase())){
        return id
      }
    }).map(id=>
     <div className="coach-card mb-5" >
       <figure class="card-animation">
         <img alt="caoch-photo" src={posts[id].photo}/> 
         	<figcaption>
             <h3 className="">{posts[id].name} {posts[id].lastname}</h3>
             <p className="">Coach de {posts[id].speciality}</p>
          </figcaption>
        </figure>
        <div className="d-flex justify-content-center mt-4">
          <Link to={`/coach/${posts[id]._id}`}>
            <Button
            variant="primary" className="top-btn"
            onClick={() => getItem(posts[id]._id)} >
              Plus de détails
            </Button>     
          </Link>
        </div>  
     </div>
  )
  }
 </div>
</div>
);
};
    
  