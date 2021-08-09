import logo from '../../../../img/logo.png'
import {Navbar, Nav, Button} from "react-bootstrap"
import {FaUser} from 'react-icons/fa'
import { Link } from "react-router-dom"
import { useState } from 'react'
import '../css/common-pages/navbar.css'


function NavBar(){
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
    
  return(
<div className="">
 <Navbar className={colorChange ? 'navbar colorChange' : 'navbar'} fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
        <Link className="nav-link my-auto" to="/">Coaching sportif</Link>
        <Link className="nav-link my-auto" to="/a-propos">A propos</Link>
        <Link className="nav-link my-auto" to="/nos-coachs">Nos coachs</Link>
        <Link className="nav-link my-auto" to="/contact">Contact</Link>
        <Link className="nav-link my-auto" to="/connexion">
            <Button className="button-sign my-auto" variant="outline-dark" >
                 <FaUser className="mb-1"/>
            </Button>
        </Link>
    </Nav>
  </Navbar.Collapse>
 </Navbar>
</div>
)}
export default NavBar
