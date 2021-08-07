import './css/explication.css'
import search from '../../../img/recherche.png'
import reservation from '../../../img/reservation.png'
import confirmation from '../../../img/confirmation.png'
import seance from '../../../img/seance.png'


import { Container, Row, Col} from 'react-bootstrap'


function Explication() {

    return (
     <div>
      <h2 className="text-center my-5 pt-4">COMMENT ÇA MARCHE ?</h2>
      <div className="explication-section">
        <Container className="pt-2">
          <Row>
              <Col lg={3} xs={12} sm={12}>
                   <div className = "text-center">
                      <img src={ search } className="mt-2 mb-4 w-75 " alt="logo recherche de coach" />
                      <hr className="mb-4 d-block mx-auto hr"></hr>
                      <h3 className="mb-4">RECHERCHE</h3>
                      <p className="mt-3 mb-5 pb-3">Renseignez votre localisation, l’activité de votre choix, votre fourchette de prix pour trouver le coach qui vous correspond.</p>
                   </div>
              </Col>
              <Col lg={3} xs={12} sm={12}>
                   <div className = "text-center">
                      <img src={ reservation } className="mt-2 mb-4  w-75 " alt="logo réservation" />
                      <hr className="mb-4 d-block mx-auto hr"></hr>
                      <h3 className="mb-4">RÉSERVATION</h3>
                      <p className="mt-3 mb-5 pb-3">Contactez votre coach  directement pour expliquer votre objectif ,votre diponibilité ,tous les détails, et booker la séance qui vous convient.</p>
                   </div>
              </Col>
              <Col lg={3} xs={12} sm={12}>
                   <div className = "text-center">
                      <img src={ confirmation } className="mt-2 mb-4 w-75" alt="logo confirmation" />
                      <hr className="mb-4 d-block mx-auto hr"></hr>
                      <h3 className="mb-4">CONFIRMATION</h3>
                      <p className="mt-3 mb-5 pb-3">Votre coach confirme votre séance et vous contacte pour fixer un lieu de rendez-vous:  chez vous, chez lui ou dans un endroit en plein air.</p>
                   </div>
              </Col>
              <Col lg={3} xs={12} sm={12}>
                   <div className = "text-center ">
                       <img src={ seance } className="mt-2 mb-4  w-75" alt="logo seance" />
                       <hr className="mb-4 d-block mx-auto hr"></hr>
                       <h3 className="mb-4">SÉANCE</h3>
                       <p className="mt-3 mb-5 pb-3">Votre séance se déroule sous la supervision de votre coach qui vous motive et vous accompagne. De quoi devenir rapidement accro !</p>
                   </div>
                   
              </Col>
          </Row>
        </Container>
      </div>
    </div>
    ) 
}

export default Explication