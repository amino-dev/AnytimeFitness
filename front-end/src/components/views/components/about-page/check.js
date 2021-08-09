import { Container , Row , Col } from 'react-bootstrap'
import CoachSportif from './coach-sportif.js'
import AnytimeFtiness from './anytime-fitness'



function Check(){
 
  return(
  <div className ="">
    <div className=" container text-center mt-5 pt-3 mb-4">
      <h2 className="mb-4">👍🏼 POURQUOI CHOISIR UN COACH SPORTIF ANYTIME FITNESS 👍🏼</h2>
    </div>
        <Container>
               <Row>
                   <Col lg={6} xs={12} sm={12}>
                     <CoachSportif/>    
                   </Col>
                   <Col lg={6} xs={12} sm={12}>
                     <AnytimeFtiness/>
                   </Col>
               </Row>
      </Container>
  </div>
)}
export default Check