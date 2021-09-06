
import {Button,Card, Row, Col} from 'react-bootstrap'
import {FaHome} from 'react-icons/fa'
import {BsFillTrashFill} from 'react-icons/bs'
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import {getAllposts,deletePost} from '../../../../redux/actions/postActions';
import {useDispatch, useSelector } from 'react-redux'
import '../css/dashboard-coach/dashboard.css'


const Posts = () => {
  const posts = useSelector(state => state.postReducer.datas)

   // get all posts
  const dispatch = useDispatch()
   useEffect(() => {
   dispatch(getAllposts())
    }, [dispatch])
   console.log("my data",posts)

  // delete a post
    const delPost=(id)=>{
    dispatch (deletePost(id)) 
  }

return(
<div>
<div className="container">
<div className='className="mt-4'>
   <Link to="/" className="ml-3 btn-icon"><FaHome className="dash-icon my-4"/></Link> 
</div> 
<div className="container">
             {posts.map((coach,key ) => (
            <div key={key}>
            <Card className="p-4 mb-4">
                 <Row className='no-gutters'>
                     <Col md={12} lg={4} sm={12} xs={12}>
                          <div className="d-flex justify-content-center mb-4">
                             <Card.Img className="coach-img mb-4" variant="top" src={coach.photo}/>
                          </div> 
                          <Card.Title className="text-center mb-4">Coach de <b>{coach.speciality}</b> | <b>{coach.name} {coach.lastname}</b></Card.Title>
                          <p className="coach-info mx-3"><u>Description</u>: {coach.description}</p>
                     </Col>
                     <Col md={12} lg={8} sm={12} xs={12}>
                      <Card.Body>
                        
                          <Card.Text>
                                    <p className="coach-info"><u>solo</u>: {coach.soloprice} DT |  <u>duo</u> :   {coach.duoprice}  DT  |  <u>trio</u> :  {coach.trioprice} DT  |  <u>quatuor</u> :   {coach.quatuorprice} DT  |  <u>frais de déplacement</u>: {coach.transportprice} DT</p>
                                    <p className="coach-info"><u>Cours proposés</u>: {coach.courses}</p>
                                    <p className="coach-info"><u>Déroulement </u>: {coach.place}</p>
                                    <p className="coach-info"><u>Niveaux</u>: {coach.level}</p>
                                    <p className="coach-info"><u>Adresse</u>: {coach.adress}</p>
                                    <p className="coach-info"><u>Mobilité</u>: {coach.mobility}</p>
                                    <p className="coach-info"><u>Expériences en tant que coach</u> : </p>
                                    <ul>
                                      <li className="coach-info">{coach.experience1}</li>
                                      <li className="coach-info">{coach.experience2}</li>
                                      <li className="coach-info">{coach.experience3}</li>
                                      <li className="coach-info">{coach.experience4}</li>
                                    </ul>
                                    <p className="coach-info"><u>Certifications</u> : </p>
                                    <ul>
                                      <li className="coach-info">{coach.certification1}</li>
                                      <li className="coach-info">{coach.certification2}</li>
                                      <li className="coach-info">{coach.certification3}</li>
                                      <li className="coach-info">{coach.certification4}</li>
                                    </ul>
                                    <p className="coach-info"><u>Méthodologie</u>: {coach.method}</p>   
                          </Card.Text>
                     </Card.Body>
                     </Col>
                 </Row>
                <div className="d-flex justify-content-center">
                  <Button className="btn-icon" ><BsFillTrashFill className="btn-icon" onClick={() => delPost(coach._id)} /></Button>
                </div>
            </Card>
            </div>
          ))
        }
        </div>
    </div>
</div>

)}
export default Posts