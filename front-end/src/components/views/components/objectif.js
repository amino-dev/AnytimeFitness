import { Container , Row , Col } from 'react-bootstrap'
import './css/objectif.css'
import coach from '../../../img/coach.png'
import Objectifs from './objectifs'


function Objectif(){
 
  return(
  <div className ="">
    <div className=" container text-center mt-5 pt-3 mb-4">
      <h2 className="mb-4">💥 C'EST LE MOMENT D'ATTEINDRE VOS OBJECTIFS 💥</h2>
      <div className = "services-desc d-block mx-auto pb-5">
          <p>Cela fait bien longtemps que vous n'avez pas atteint vos objectifs sportifs ?Nous sommes justement là pour vous aider et vous accompagner dans la réalisation rapide de tous vos objectifs !</p>
      </div>
    </div>
        <Container>
               <Row>
                   <Col lg={5} xs={12} sm={12}>
                       <img src={coach} alt="coach" className="w-100 about-img mb-5 "/>
                   </Col>
                   <Col lg={7} xs={12} sm={12}>
                       <Objectifs />
                   </Col>
               </Row>
      </Container>
  </div>
)}
export default Objectif