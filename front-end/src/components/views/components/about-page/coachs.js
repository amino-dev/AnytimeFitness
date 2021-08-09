import { Container , Row , Col } from 'react-bootstrap'
import '../css/about-page/objectif.css'
import coach1 from '../../../../img/coach-1.png'
import coach2 from '../../../../img/coach-2.png'
import coach3 from '../../../../img/coach-3.png'
import ObjectifsCoach  from './objectifsCoach'
import { Carousel } from 'react-bootstrap'
import Descs from '../about-page/desc'


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
                                className="d-block carousel-img w-100 mb-5"
                                src={ coach1 }
                                alt="First slide"
                               />
                           </Carousel.Item>
                           <Carousel.Item>
                               <img
                               className="d-block carousel-img w-100 mb-5"
                               src={ coach2 }
                               alt="Second slide"
                               />
                           </Carousel.Item>
                           <Carousel.Item>
                               <img
                               className="d-block carousel-img w-100 mb-5"
                               src={ coach3 }
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
    <Descs/>
  </div>
)}
export default Coachs