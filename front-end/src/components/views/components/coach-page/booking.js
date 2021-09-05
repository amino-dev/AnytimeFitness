import React, {useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getOnePost} from "../../../../redux/actions/postActions"
import {Button,Container,Modal,Form} from 'react-bootstrap'
import {getAllposts} from "../../../../redux/actions/postActions"
import TopButton from '../coach-page/top-button'
import { Link } from 'react-router-dom'
import "../css/coachs-page/coachs.css"
import { useHistory } from "react-router-dom";


export default function Booking() {


     const dispatch = useDispatch()

     const auth = useSelector((state) => state.auth);
     const renderNonLoggedInLinks = () => {
        return (
         <Container>
            <div className="d-flex justify-content-center">
              <Link to="/anytimeFitness/connexion-client">
                <Button  variant="primary" className="top-btn">
                  Réserver
                </Button> 
              </Link>        
            </div>
         </Container>  
         
        );
      };

      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const renderLoggedInLinks = () => {
        return (
         <Container>
            <div className="d-flex justify-content-center">
              <Button  variant="primary" className="top-btn" onClick={handleShow}>
                  Réserver
              </Button>
              <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Réserver avec votre coach</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="coachName"

                     className ="contact-input"
                     placeholder="SVP entrez le nom du coach choisi ...!" 
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="clientName"
                   
                     className ="contact-input"
                     placeholder="SVP entrez votre nom complet ...!" 
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="speciality"
                   
                     className ="contact-input"
                     placeholder="SVP entrez la spécialité demandée ici ...!" 
                      />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="date" name="bookingDate" 
                   
                     className ="contact-input"
                    
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="time" name="bookingTime" 
                   
                     className ="contact-input"
                    
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="string" name="place" 
                     placeholder="Chez le client / chez le coach / en plein air ...!" 
                     className ="contact-input"
                    
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="string" name="adress" 
                      placeholder="SVP entrez votre adresse ...!" 
                     className ="contact-input"
                    
                     />
                </Form.Group>
                
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" type="submit"  className="top-btn">Publier</Button>
            </Modal.Footer>
          </Modal>        
            </div>
         </Container>  
      
        );
      };
     const booking = () => {
        { 
        if(auth.authenticate){
        return renderLoggedInLinks()
      } else {
        return renderNonLoggedInLinks()
      } 
    }}
    return (
        <div>
             {booking()}
        </div>
       
    )
}
