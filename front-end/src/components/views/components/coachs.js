import { Container , Row , Col } from 'react-bootstrap'
import './css/objectif.css'
import coach from '../../../img/coach.png'
import ObjectifsCoach  from './objectifsCoach'
import { Carousel } from 'react-bootstrap'


function Coachs(){
 
  return(
  <div>
    <div className=" container text-center mt-5 pt-3 mb-4">
      <h2 className="mb-4">🎯 ATTEIGNEZ VOS OBJECTIFS AVEC VOTRE COACH SPORTIF 🎯</h2>
      <div className = "services-desc d-block mx-auto pb-5">
          <p>Nous encadrons nos clients jusqu'à la réalisation de leurs objectifs. Nous adaptons nos séances en fonction de ceux-ci mais également en fonction de leurs niveau de forme, leurs différents problèmes de santé, leurs âges, leurs complexes, leurs planning...</p>
          <p>Tout est pris en compte pour un résultat rapide et durable.</p>
      </div>
    </div>
        <Container>
               <Row>
                   <Col lg={6} xs={12} sm={12}>
                       <Carousel>
                           <Carousel.Item>
                               <img
                                className="d-block w-100 mb-5"
                                src={ coach }
                                alt="First slide"
                               />
                           </Carousel.Item>
                           <Carousel.Item>
                               <img
                               className="d-block w-100 mb-5"
                               src={ coach }
                               alt="Second slide"
                               />
                           </Carousel.Item>
                           <Carousel.Item>
                               <img
                               className="d-block w-100 mb-5"
                               src={ coach }
                            alt="Third slide"
                            />
                           </Carousel.Item>
                        </Carousel> 
                   </Col>
                   <Col lg={6} xs={12} sm={12}>
                       <ObjectifsCoach />
                   </Col>
               </Row>
      </Container>
  </div>
)}
export default Coachs