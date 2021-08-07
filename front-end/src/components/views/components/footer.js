import './css/footer.css'
import logo from '../../../img/logo.png'
import { Container, Row, Col} from 'react-bootstrap'
import { FaMailBulk, FaPhoneAlt, FaClock,FaHeart, FaCopyright, FaFacebookSquare,FaTwitterSquare, FaInstagramSquare} from 'react-icons/fa'
import { Link } from "react-router-dom"

function Footer() {

    return (
      <div className="footer">
      <Container className="pt-2">
<Row>
 <Col lg={5} xs={12} sm={12}>
 
 <img src={logo} className="App-logo mt-2" alt="logo" />
 <p className="ml-4 mt-3 footer-description">Notre équipe se tient à votre disposition pour tous renseignements.
Pour des questions spécifiques ou personnelles nos vous invitons à nous poser vos questions par mail ou par téléphone.</p>
 
 </Col>
 <Col lg={3} xs={12} sm={12}>

 <h5 className="pt-4 footer-title"><b>Contact</b></h5>
 <dl className="ml-3 mt-4">
    <dd className="mb-3 footer-contact"><FaMailBulk className="mr-3"/>samet.amin@yahoo.fr</dd>
    <dd className="mb-3 footer-contact"><FaPhoneAlt className="mr-3"/>+216 22 917 360</dd>
    <dd className="mb-3 footer-contact"><FaClock className="mr-3"/>Appel de 9h à 22h</dd>
 </dl>
 </Col>
 <Col lg={2} xs={12} sm={12}>
   <h5 className="pt-4 footer-title"><b>Navigation</b></h5>
    <Link className="nav-link my-auto" to="/">Coaching sportif</Link>
    <Link className="nav-link my-auto" to="/a-propos">A propos</Link>
    <Link className="nav-link my-auto" to="/nos-coachs">Nos coachs</Link>
    <Link className="nav-link my-auto" to="/contact">Contact</Link>
 </Col>
 <Col lg={2} xs={12} sm={12}>

 <h5 className="pt-4 footer-title"><b>Réseau</b></h5>

 <div className="social d-flex justify-content-evenly ml-3 mt-3">
   <a href="https://www.facebook.com/" target="_blank"><FaFacebookSquare className="mr-3" /></a>
   <a href="https://www.instagram.com/" target="_blank"><FaInstagramSquare className="mr-3" /></a>
   <a href="https://www.twitter.com/" target="_blank"><FaTwitterSquare className="mr-3" /></a>
  </div>
 </Col>
</Row>
<hr className="mt-5 mb-3" color="#666" />
<div className=" d-flex justify-content-center">
<p className="footer-copyright" > <FaCopyright className="my-auto"/> 2021 <FaHeart className="my-auto"/> Aminoo</p>
</div>


</Container>


     </div>
    ) 
}
export default Footer