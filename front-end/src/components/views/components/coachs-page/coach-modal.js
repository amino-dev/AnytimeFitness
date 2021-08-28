import React, {useEffect,useState} from 'react'
import {Button,Container,Modal,Row,Col} from 'react-bootstrap'
import {FaEye} from 'react-icons/fa'
import {useDispatch, useSelector } from 'react-redux'
import {getAllposts} from "../../../../redux/actions/postActions"
import TopButton from '../coach-page/top-button'
import { Link } from 'react-router-dom'
import "../css/coachs-page/coachs.css"
import { useHistory } from "react-router-dom";


export default function CoachsModal() {

 
     const post = useSelector(state => state.postReducer.datas)
 
     const dispatch = useDispatch()
     useEffect(() => {
      dispatch(getAllposts())
         }, [dispatch])
      console.log("my data",post)

    const [show, setShow] = useState(false);

    return (
      <div>
          <div className="">
             {post.map((coach,key ) => (
                  <div className="" key={key}>
                         <div className="d-flex justify-content-center mb-2">
                           <Button variant=""><FaEye className="icons" onClick={() => setShow(true)}/></Button> 
                           <Modal
                           show={show}
                           size="lg"
                           onHide={() => setShow(false)}
                           dialogClassName="modal-90w"
                           aria-labelledby="example-custom-modal-styling-title"
                           >
                            <Modal.Header closeButton>
                              <Modal.Title id="example-custom-modal-styling-title">
                                Détails du coach
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <Container className="mt-2 mb-5">
                                <h3 className="text-center mb-4"> Coach de {coach.speciality} | {coach.name} </h3>
                                <div className="d-flex justify-content-center">
                                  <Button  variant="primary" className="top-btn">
                                    Réserver
                                  </Button>
                                </div>
                                <hr className="mt-4"></hr>
                              </Container>
                              <Container className="mx-3">
                                <Row>
                                  <Col lg={5} sm={12} xs={12}>
                                   <div className="d-flex justify-content-center">
                                     <img className="modal-img" variant="top" src={coach.photo}/>
                                   </div>
                                  </Col>
                                  <Col lg={7} sm={12} xs={12} className="mt-5 pt-1">
                                   
                                    <h4 className="mb-4">{coach.name} {coach.lastname}</h4>
                                    <h5 className="mb-4">{coach.speciality}</h5>
                                    <h6 className="mb-4 coach-info">solo : {coach.soloprice} DT |  duo :   {coach.duoprice}  DT  |  trio :  {coach.trioprice} DT  |  quatuor :   {coach.quatuorprice} DT</h6>
                                    <h6 className="mb-4 coach-info">Frais de déplacement : {coach.transportprice} DT</h6> 
                                  </Col>
                                </Row>
                              </Container>
                              <Container className="mb-5 mx-2">
                                <Row>
                                  <Col lg={4} sm={12} xs={12} className="sidebar mt-5 pt-3">
                                    <h4 className="mb-3">Déroulement</h4>
                                    <h6 className="mb-5  coach-info">{coach.place}</h6>
                                    <h4 className="mb-3">Cours proposés</h4>
                                    <h6 className="mb-5  coach-info">{coach.courses}</h6>
                                    <h4 className="mb-3 ">Niveaux</h4>
                                    <h6 className="mb-5  coach-info">{coach.level}</h6>
                                    <h4 className="mb-3  coach-info">Adresse</h4>
                                    <h6 className="mb-5  coach-info">{coach.adress}</h6>
                                    <h4 className="mb-3">Mobiliité</h4>
                                    <h6 className="mb-5  coach-info">{coach.mobility}</h6>
                                  </Col>
                                  <Col lg={8}  sm={12} xs={12} className="mt-4 pt-4">
                                  <div className="info-coach pt-3 px-3">
                                    <h3 className="mb-4">Description</h3>
                                    <h6 className="pb-4 coach-info">{coach.description}</h6>
                                   </div>
                                   <div className="info-coach pt-3 px-3">
                                    <h3 className="mb-4">Son expérience de coach</h3>
                                    <ul>
                                      <li className="mb-4 coach-infos">{coach.experience1}</li>
                                      <li className="mb-4 coach-infos">{coach.experience2}</li>
                                      <li className="mb-4 coach-infos">{coach.experience3}</li>
                                      <li className="pb-4 coach-infos">{coach.experience4}</li>
                                    </ul>
                                   </div>
                                   <div className="info-coach pt-3 px-3">
                                    <h3 className="mb-4">Certifications</h3>
                                    <ul>
                                      <li className="mb-4 coach-infos">{coach.certification1}</li>
                                      <li className="mb-4 coach-infos">{coach.certification2}</li>
                                      <li className="mb-4 coach-infos">{coach.certification3}</li>
                                      <li className="pb-1 coach-infos">{coach.certification4}</li>
                                    </ul>
                                   </div>
                                   <div className="info-coach pt-3 px-3">
                                    <h3 className="mb-4">Méthodologie</h3>
                                    <h6 className="pb-4 coach-info">{coach.method}</h6>
                                   </div>
                                  </Col>
                                </Row>
                              </Container>
                            </Modal.Body>
                          </Modal>
                         </div> 
                  </div>
                ))
              }
            </div>
        </div>
            
    )
}
