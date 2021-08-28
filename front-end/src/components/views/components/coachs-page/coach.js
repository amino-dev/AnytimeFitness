import React, {useEffect,useState} from 'react'
import {Button,Card, Row, Col} from 'react-bootstrap'
import {FaEye} from 'react-icons/fa'
import {useDispatch, useSelector } from 'react-redux'
import {getAllposts} from "../../../../redux/actions/postActions"
import { Link } from 'react-router-dom'
import "../css/coachs-page/coachs.css"
import {getProductDetailsById } from "../../../../redux/actions/postActions";
import logo from "../../../../img/coach-1.png"

export default function CoachsPosts({}) {

const post = useSelector(state => state.postReducer.datas)

const dispatch = useDispatch()
useEffect(() => {
 dispatch(getAllposts())
    }, [dispatch])
 console.log("my data",post)

    return (
        <div className="container">
             {post.map((coach,key ) => (
            <div key={key}>
            <Card className="p-4 mb-4">
                 <Row className='no-gutters'>
                     <Col md={12} lg={4} sm={12} xs={12}>
                          <div className="d-flex justify-content-center mb-4">
                             <Card.Img className="modal-img mb-4" variant="top" src={coach.photo}/>
                          </div> 
                          <Card.Title className="text-center mb-4">Coach de <b>{coach.speciality}</b> | <b>{coach.name} {coach.lastname}</b></Card.Title>
                     </Col>
                     <Col md={12} lg={8} sm={12} xs={12}>
                      <Card.Body>
                        
                          <Card.Text>
                                    <p className="coach-info"><u>Description</u>: {coach.description}</p>
                                    <p className="coach-info"><u>solo</u>: {coach.soloprice} DT |  <u>duo</u> :   {coach.duoprice}  DT  |  <u>trio</u> :  {coach.trioprice} DT  |  <u>quatuor</u> :   {coach.quatuorprice} DT  |  <u>frais de déplacement</u>: {coach.transportprice} DT</p>
                                    <p className="coach-info"><u>Cours proposés</u>: {coach.courses}</p>
                                    <p className="coach-info"><u>Déroulement </u>: {coach.place}</p>
                                    <p className="coach-info"><u>Niveaux</u>: {coach.level}</p>
                                    <p className="coach-info"><u>Adresse</u>: {coach.adress}</p>
                                    <p className="coach-info"><u>Mobilité</u>: {coach.mobility}</p>

                                    <p className="coach-info"><u>Certifications</u> : </p>
                                    <ul>
                                      <li className="coach-info">{coach.certification1}</li>
                                      <li className="coach-info">{coach.certification2}</li>
                                      <li className="coach-info">{coach.certification3}</li>
                                      <li className="coach-info">{coach.certification4}</li>
                                    </ul>
                                    <p className="coach-info"><u>Méthodologie</u>: {coach.method}</p>   
                          </Card.Text>
                          <div className="d-flex justify-content-center">
                                <Button  variant="primary" className="top-btn">
                                    Réserver
                                </Button>
                          </div>
                     </Card.Body>
                     </Col>
                 </Row>
            </Card>
            </div>
          ))
        }
        </div>
    )
}