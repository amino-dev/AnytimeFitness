import './css/offer.css'
import { Container, Row, Col } from 'react-bootstrap'
import solo from '../../../img/solo.png'
import community from '../../../img/group.png'
import Communities from './community'

 function Offers() {
    return(
     <div>
         <h2 className="text-center  mb-5 pb-5">NOS OFFRES</h2>
           <Container>
               <Row>
                   <Col lg={6} xs={12} sm={12}>
                       <div className="w-100 h-75">
                        <h3 className="mb-4">COURS PERSONNEL</h3>
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
                       <img src={community} alt="coaching en communité" className="w-100  mb-4"/> 
                   </Col>
                   <Col lg={6} xs={12} sm={12}>
                       <div>
                          <h3 className="mb-4">COURS EN COMMUNITÉ</h3>
                          <p className="offers-paragraph">Rajoutez du fun à vos séances en invitant des personnes. Cela vous permettra de vous motiver mutuellement, de partager les coûts des séances et surtout de faire du sport avec des personnes que vous appréciez. Peu importe vos niveaux respectifs, peu importe vos objectifs, le coach saura adapter au mieux les séances pour tous !</p>
                       </div>   
                   </Col>
               </Row>
               <Communities/>   
           </Container>
      
     </div>
    )
 }
 export default Offers