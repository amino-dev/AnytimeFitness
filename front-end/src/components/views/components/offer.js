import './css/offer.css'
import { Container, Row, Col } from 'react-bootstrap'
import solo from '../../../img/solo.png'
import community from '../../../img/group.png'

 function Offers() {
    return(
     <div>
         <h2 className="text-center  mb-5 pb-3">NOS OFFRES</h2>
           <Container>
               <Row>
                   <Col lg={6} xs={12} sm={12}>
                       <div>
                        <h3 className="mb-4">Cours Personnel</h3>
                        <p className="offers-paragraph">Envie d’un coaching personnalisé ? Découvrez l’offre Personal de Anytime Fitness.</p>
                        <p className="offers-paragraph">Quel que soit votre objectif, nous avons le coach qui vous correspond. Votre coach de Anytime Fitness s’adapte entièrement à vos besoins.</p>
                        <p className="offers-paragraph"> Choisissez le lieu, l’horaire et le jour, afin d’adapter le cours à vos disponibilités et profiter pleinement de votre séance en toute sérénité. Votre cours peut se dérouler en présentiel ou en Visio-Live selon vos envies.</p>
                       </div>  
                   </Col>
                   <Col lg={6} xs={12} sm={12}>
                       <img src={solo} alt="coaching individuel" className="w-100 h-75"/>
                   </Col>
               </Row>
               <Row>
                   <Col lg={6} xs={12} sm={12}>
                       <img src={community} alt="coaching en communité" className="w-100 h-100"/> 
                   </Col>
                   <Col lg={6} xs={12} sm={12}>
                   <div>
                        <h3 className="mb-4">Cours Personnel</h3>
                        <p className="offers-paragraph">Envie d’un coaching personnalisé ? Découvrez l’offre Personal de Anytime Fitness.</p>
                        <p className="offers-paragraph">Quel que soit votre objectif, nous avons le coach qui vous correspond. Votre coach de Anytime Fitness s’adapte entièrement à vos besoins.</p>
                        <p className="offers-paragraph"> Choisissez le lieu, l’horaire et le jour, afin d’adapter le cours à vos disponibilités et profiter pleinement de votre séance en toute sérénité. Votre cours peut se dérouler en présentiel ou en Visio-Live selon vos envies.</p>
                       </div> 
                      
                   </Col>
               </Row>
               
           </Container>
      
     </div>
    )
 }
 export default Offers