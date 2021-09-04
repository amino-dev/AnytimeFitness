import "../css/coach-page/top-button.css"
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import { useState } from "react"
import check from "../../../../img/check-res.png"
import cross from "../../../../img/cross.png"
import checkbox from "../../../../img/checkbox.png"
import clock from "../../../../img/clock.png"
import star from "../../../../img/star.png"
import money from "../../../../img/money.png"


function TopButton() {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   return(
    <div className="container mt-3 pt-2">
      <div className="d-flex justify-content-center">
        <Button variant="primary" className="top-btn" onClick={handleShow}>
        Comment réserver ?
        </Button>
      </div>
      <Modal show={show} onHide={handleClose} className="">
        <Modal.Header closeButton>
          <Modal.Title>Comment réserver ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <ul>
           <li className="mb-4 d-flex"> 
             <img src={ check } className="mr-3 form-icon"/> 
             <p className="reservation-desc">Renseignez votre adresse et le sport que vous voulez pratiquer</p>
           </li>
           <li className="mb-4 d-flex"> 
             <img src={ check } className="mr-3 form-icon"/>
             <p className="reservation-desc"> Sélectionnez le coach qui vous plait selon vos critères</p>
           </li>
           <li className="mb-4  d-flex"> 
             <img src={ cross } className="mr-3 form-icon"/> 
             <p className="reservation-desc">Voir les disponibilités du coach et choisir la date et l'heure qui vous conviennent pour le rendez vous</p>
           </li>
           <li className="mb-4 d-flex"> 
             <img src={ cross } className="mr-3 form-icon"/> 
             <p className="reservation-desc">Réservez le créneau et le lieu (A domicile, en extérieur, etc...) qui vous convient</p>
           </li>
           <p className="reserved-course mb-5">Une fois votre cours réservé</p>
           <li className="mb-4 d-flex"> 
             <img src={ checkbox } className="mr-3 form-icon"/> 
             <p className="reservation-desc">Le coach valide votre réservation. Il vous appelle s'il a besoin de précision</p>
           </li>
           <li className="mb-4 d-flex"> 
             <img src={ clock } className="mr-3 form-icon"/> 
             <p className="reservation-desc">Au moment du cours, le coach arrive 5 min avant le cours avec le matériel nécessaire</p>
           </li>
           <li className="mb-4 d-flex"> 
             <img src={ star } className="mr-3 form-icon"/> 
             <p className="reservation-desc">Une fois le cours terminé, évaluez votre coach et votre séance</p>
           </li>
           <li className="mb-4 d-flex"> 
             <img src={ money } className="mr-3 form-icon"/> 
             <p className="reservation-desc">Vous payer le coach selon le montant convenu</p>
           </li>
         </ul>
         <hr></hr>
         <div className="text-center">
            <p>Des questions ? Contacter nous au <span className="tel">22 917 360</span></p>
            <p>Prêt(e) à réserver ?</p>
         </div>
         <div className ="d-flex justify-content-center mb-2">
           <Link className="my-auto" to="/anytimeFitness/nos-coachs">
             <Button variant="primary" className="top-btn">
             Voir tous nos coachs sportifs
             </Button>
           </Link>
        </div>
        </Modal.Body>  
      </Modal>
    </div>
   )
}
export default TopButton