import {Card,Col,Row,Button} from 'react-bootstrap';
import {BsFillTrashFill} from 'react-icons/bs'
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import '../css/dashboard-coach/dashboard.css'
import {getAllposts,deletePost} from '../../../../redux/actions/postActions';
import { useEffect } from 'react';
import UpdatePost from "./updatePost"



const PostCoach = () => {
    const posts = useSelector(state => state.postReducer.datas)


  const coachAuth = useSelector((state) => state.coachAuth)
  
  //get all posts
  const dispatch = useDispatch()
   useEffect(() => {
   dispatch(getAllposts())
    }, [dispatch])
   console.log("my data",posts)
   console.log(coachAuth.user.name)

     //delete a post
     const delPost=(id)=>{
      dispatch (deletePost(id)) 
    }
        return (

<div className="container mt-5">
{Object.keys(posts).filter((id) => {
      if ((posts[id].name === coachAuth.user.name && posts[id].lastname === coachAuth.user.lastname)) {
       return id
     }
    }).map(id=>
            <div>
            <Card className="p-4 mb-4">
                 <Row className='no-gutters'>
                     <Col md={12} lg={4} sm={12} xs={12}>
                          <div className="d-flex justify-content-center mb-4">
                             <Card.Img className="coach-img mb-4" variant="top" src={posts[id].photo}/>
                          </div> 
                          <Card.Title className="text-center mb-4">Coach de <b>{posts[id].speciality}</b> | <b>{posts[id].name} {posts[id].lastname}</b></Card.Title>
                          <p className="coach-info mx-3"><u>Description</u>: {posts[id].description}</p>
                     </Col>
                     <Col md={12} lg={8} sm={12} xs={12}>
                      <Card.Body>
                        
                          <Card.Text>
                                    <p className="coach-info"><u>solo</u>: {posts[id].soloprice} DT |  <u>duo</u> :   {posts[id].duoprice}  DT  |  <u>trio</u> :  {posts[id].trioprice} DT  |  <u>quatuor</u> :   {posts[id].quatuorprice} DT  |  <u>frais de déplacement</u>: {posts[id].transportprice} DT</p>
                                    <p className="coach-info"><u>Cours proposés</u>: {posts[id].courses}</p>
                                    <p className="coach-info"><u>Déroulement </u>: {posts[id].place}</p>
                                    <p className="coach-info"><u>Niveaux</u>: {posts[id].level}</p>
                                    <p className="coach-info"><u>Adresse</u>: {posts[id].adress}</p>
                                    <p className="coach-info"><u>Mobilité</u>: {posts[id].mobility}</p>
                                    <p className="coach-info"><u>Expériences en tant que coach</u> : </p>
                                    <ul>
                                      <li className="coach-info">{posts[id].experience1}</li>
                                      <li className="coach-info">{posts[id].experience2}</li>
                                      <li className="coach-info">{posts[id].experience3}</li>
                                      <li className="coach-info">{posts[id].experience4}</li>
                                    </ul>
                                    <p className="coach-info"><u>Certifications</u> : </p>
                                    <ul>
                                      <li className="coach-info">{posts[id].certification1}</li>
                                      <li className="coach-info">{posts[id].certification2}</li>
                                      <li className="coach-info">{posts[id].certification3}</li>
                                      <li className="coach-info">{posts[id].certification4}</li>
                                    </ul>
                                    <p className="coach-info"><u>Méthodologie</u>: {posts[id].method}</p>   
                          </Card.Text>
                     </Card.Body>
                     </Col>
                 </Row>
                 <div className="d-flex justify-content-center">
                  <Button className="btn-icon" ><BsFillTrashFill className="btn-icon" onClick={() => delPost(posts[id]._id)} /></Button>
                  <UpdatePost id={posts[id]._id}  el={posts[id]}/>
                 </div>
            </Card>
            
           </div>
           
          )
        }
      </div>
 
        )
      }

export default PostCoach