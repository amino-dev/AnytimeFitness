import React, {useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Button,Container,Modal,Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../css/coachs-page/coachs.css"
import { addNewBooking } from '../../../../redux/actions/bookingActions'
import {getOnePost} from "../../../../redux/actions/postActions"



export default function Booking({id}) {

     const coach = useSelector(state => state.postReducer.datas)
     const auth = useSelector((state) => state.auth)
     
     const [input,setInput]=useState({
      coachName : "",
      clientName : "",
      bookingDate : "",
      bookingTime : "",
      speciality : "",
      place : "",
      adress : ""
     })

     const handleChange=(e)=>{
     const {name,value}=e.target
     setInput({
      ...input,
      [name]:value
     })
     console.log("input",input)
     }

     const dispatch = useDispatch()

     const addBooking=()=>{
      dispatch (addNewBooking(coach.name + " " + coach.lastname,auth.user.fullName,input.bookingDate,input.bookingTime ,input.speciality, input.place, input.adress)) 
      console.log("inpuuuuuuuuuuuut",input)
      setShow(false)
      }


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

   

      useEffect(() => {
        dispatch(getOnePost({id}));
      },[]);
      console.log(coach, "post by id");
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
                {/* <Form.Group className="mb-3">
                     <Form.Control type="text" name="coachName"
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez le nom du coach choisi ...!" 
                     />
                </Form.Group> */}
                {/* <Form.Group className="mb-3">
                     <Form.Control type="text" name="clientName"
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez votre nom complet ...!" 
                     />
                </Form.Group> */}
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="speciality"
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez la spécialité demandée ici ...!" 
                      />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="date" name="bookingDate" 
                     onChange={handleChange}
                     className ="contact-input"
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="time" name="bookingTime" 
                     onChange={handleChange}
                     className ="contact-input"
                    
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="string" name="place" 
                     placeholder="Chez le client / chez le coach / en plein air ...!" 
                     onChange={handleChange}
                     className ="contact-input"
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="string" name="adress" 
                      placeholder="SVP entrez votre adresse ...!"
                      onChange={handleChange} 
                      className ="contact-input"
                     />
                </Form.Group>
                
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" type="submit"  className="top-btn" onClick={ () => {addBooking()}}>Envoyer la réservation</Button>
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
