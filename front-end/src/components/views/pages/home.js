import NavBar from "../components/navbar"
import Footer from "../components/footer"
import img from '../../../img/top.png'
import Text from "../components/text"
import './css/home.css'
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Atouts from "../components/atouts"
import About from "../components/about"
import Offers from "../components/offer"
import Explication from "../components/explication"



function Home(){
 
  return(
<div className="">
    <NavBar/>
    <div className="">
      <div className="position-relative">
        <img  className="img-fluid img-top  w-100" src={img} alt=""/>
        <div className="top-text position-absolute  top-50 start-50 translate-middle">
          <div className="col-md-12 col-12">
            <h1><Text/></h1>
            <h2 className="text-center top-text">Réservez en quelques clics une séance de sport avec un coach certifié</h2>
            <div className="d-flex justify-content-center">
              <Link className="nav-link my-auto" to="/nos-coachs">
                 <Button className="p-4 primary-btn">Voir tous <br></br>nos coachs</Button> 
              </Link>
            </div>
          </div>
        </div>
      </div>  
    </div>
    <div className="">
      <p className="text-center alert-section py-4"><span className="top-title">🚨 INFORMATIONS COVID-19 🚨 </span> : Port du masque obligatoire, distance de sécurité, désinfection régulière du matériel et lavage de mains entre chaque séance.</p>
    </div>
    <About/>
    <Atouts/>
    <Offers/>
    <Explication/>
    <Footer/>
  
</div>
)}
export default Home