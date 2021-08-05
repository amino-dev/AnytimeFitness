import NavBar from "./navbar"
import Footer from "./footer"
import img from '../../img/top.png'
import Text from "./text"
import './css/home.css'
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Atouts from "./atouts"


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
    <Atouts/>
    <Footer/>
  
</div>
)}
export default Home