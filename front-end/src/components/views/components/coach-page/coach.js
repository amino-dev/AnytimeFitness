import React, {useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getOnePost} from "../../../../redux/actions/postActions"
import {Button,Container,Modal,Row,Col} from 'react-bootstrap'
import {getAllposts} from "../../../../redux/actions/postActions"
import TopButton from '../coach-page/top-button'
import { Link } from 'react-router-dom'
import "../css/coachs-page/coachs.css"
import { useHistory } from "react-router-dom";


export default function CoachPost({id}) {


     const coach = useSelector(state => state.postReducer.datas)

     const dispatch = useDispatch()


     useEffect(() => {
        dispatch(getOnePost(id));
      },[]);
      console.log(coach, "post by id");

    return (
        <div>
             <Container className="mt-2 mb-5">
                 <Container>
                     <Row>
                        <h2 className="text-center mt-2"> Coach sportif de {coach.speciality} | {coach.name} </h2>
                        <TopButton/>
                        <hr className="mt-4"></hr>
                     </Row>
                 </Container>
                 <Container className="">
                     <Row className="mt-5">
                       <Col lg={6} sm={12} xs={12}>
                            <div className="d-flex justify-content-center">
                                <img className="modal-img" variant="top" src={coach.photo}/>
                            </div>
                       </Col>
                       <Col lg={6} sm={12} xs={12} className="mt-5 pt-2 px-4">
                            <h4 className="mb-4">{coach.name} {coach.lastname}</h4>
                            <h5 className="mb-4">{coach.speciality}</h5>
                            <h6 className="mb-4 coach-info">solo : {coach.soloprice} DT |  duo :   {coach.duoprice}  DT  |  trio :  {coach.trioprice} DT  |  quatuor :   {coach.quatuorprice} DT</h6>
                            <h6 className="coach-info">Frais de déplacement : {coach.transportprice} DT</h6>    
                       </Col>
                     </Row>
                     <Row className="mt-5 pt-1">
                       <Col lg={3} sm={12} xs={12} classname="mt-2 ">
                          <div className="sidebar p-4 mb-2">
                            <h4 className="mb-4">Déroulement</h4>
                            <h6 className="mb-5  coach-info coach-title">{coach.place}</h6>
                            <h4 className="mb-4">Cours proposés</h4>
                            <h6 className="mb-5  coach-info">{coach.courses}</h6>
                            <h4 className="mb-4 ">Niveaux</h4>
                            <h6 className="mb-5  coach-info">{coach.level}</h6>
                            <h4 className="mb-4">Adresse</h4>
                            <h6 className="mb-5  coach-info">{coach.adress}</h6>
                            <h4 className="mb-4">Mobiliité</h4>
                            <h6 className="mb-5 coach-info">{coach.mobility}</h6>
                          </div>   
                       </Col>
                       <Col lg={9} sm={12} xs={12} className="">
                            <div className="info-coach pt-3 px-4 mb-2">
                                <h3 classame="mb-4">Description</h3>
                                <h6 className="pb-4 coach-info">{coach.description}</h6>
                            </div>
                            <div className="info-coach pt-3 px-4 mb-2 ">
                                <h3 className="mb-4">Son expérience de coach</h3>
                                <h6 className="mb-4 coach-infos">{coach.experience1}</h6>
                                <h6 className="mb-4 coach-infos">{coach.experience2}</h6>
                                <h6 className="mb-4 coach-infos">{coach.experience3}</h6>
                                <h6 className="pb-4 coach-infos">{coach.experience4}</h6>
                            </div>
                            <div className="info-coach pt-3 px-4 mb-2 ">
                                <h3 className="mb-4">Certifications</h3>
                                <h6 className="mb-4 coach-infos">{coach.certification1}</h6>
                                <h6 className="mb-4 coach-infos">{coach.certification2}</h6>
                                <h6 className="mb-4 coach-infos">{coach.certification3}</h6>
                                <h6 className="pb-1 coach-infos">{coach.certification4}</h6>
                            </div>
                            <div className="info-coach pt-3 px-4 mb-2 ">
                                <h3 className="mb-4">Méthodologie</h3>
                                <h6 className="pb-4 coach-info">{coach.method}</h6>
                            </div>
                       </Col>
                     </Row>
                     <div className="d-flex justify-content-center mt-5">
                       <Button  variant="primary" className="top-btn">
                        Réserver
                       </Button>
                  </div>
                 </Container>          
            </Container>
        </div>
    )
}
