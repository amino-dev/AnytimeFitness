import logo from '../../../../img/logo.png'
import {Navbar, Nav, Button, Dropdown, ButtonGroup, SplitButton, DropdownButton} from "react-bootstrap"
import {FaUser} from 'react-icons/fa'
import {GrUserAdmin} from 'react-icons/gr'
import {FiLogOut} from 'react-icons/fi'
import {RiUserSearchLine} from 'react-icons/ri'
import {GrUserExpert} from 'react-icons/gr'
import { Link } from "react-router-dom"
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../../../../redux/actions/userAuthActions"
import { coachSignout } from "../../../../redux/actions/coachAuthActions"
import { adminSignout } from "../../../../redux/actions/adminAuthActions"
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

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout())
  };
  
  const userLogout = () =>{
    window.location.reload(logout())
  }

  const coachAuth = useSelector((state) => state.coachAuth);
  const coachLogout = () => {
    dispatch(coachSignout())
  };
  
  const CoachLogout = () =>{
    window.location.reload(coachLogout())
  }

  const adminAuth = useSelector((state) => state.adminAuth);
  const adminLogout = () => {
    dispatch(adminSignout())
  };
  
  const AdminLogout = () =>{
    window.location.reload(adminLogout())
  }

  const renderLoggedInLinks = () => {
    return (
  <Navbar className={colorChange ? 'navbar colorChange' : 'navbar'} fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
        <Link className="nav-link my-auto" to="/">Coaching sportif</Link>
        <Link className="nav-link my-auto" to="/anytimeFitness/a-propos">A propos</Link>
        <Link className="nav-link my-auto" to="/anytimeFitness/nos-coachs">Nos coachs</Link>
        <Link className="nav-link my-auto" to="/anytimeFitness/contact">Contact</Link>
        <Link className="nav-link my-auto" to="/anytimeFitness/espace-client">{auth.user.fullName}</Link>
        <Link className="nav-link my-auto" to="/anytimeFitness/connexion">
            <Button className="button-sign my-auto" variant="" onClick={userLogout} >
                 <FiLogOut className="mb-1"/>
            </Button>
        </Link>
    </Nav>
  </Navbar.Collapse>
 </Navbar>
    );
  };


  const coachLoggedInLinks = () => {
    return (
      <Navbar className={colorChange ? 'navbar colorChange' : 'navbar'} fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
        <Link className="nav-link my-auto" to="/">Coaching sportif</Link>
        <Link className="nav-link my-auto" to="/anytimeFitness/a-propos">A propos</Link>
        <Link className="nav-link my-auto" to="/anytimeFitness/nos-coachs">Nos coachs</Link>
        <Link className="nav-link my-auto" to="/anytimeFitness/contact">Contact</Link>
        <Link className="nav-link my-auto" exact to="/anytimeFitness/dashboard-coach">{coachAuth.user.fullName}</Link>
        <Link className="nav-link my-auto" to="/anytimeFitness/connexion">
            <Button className="button-sign my-auto" variant="" onClick={CoachLogout} >
                 <FiLogOut className="mb-1"/>
            </Button>
        </Link>
    </Nav>
  </Navbar.Collapse>
 </Navbar>
    );
  };

  const adminLoggedInLinks = () => {
    return (
      <Navbar className={colorChange ? 'navbar colorChange' : 'navbar'} fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
        <Link className="nav-link my-auto" to="/">Coaching sportif</Link>
        <Link className="nav-link my-auto" to="/anytimeFitness/a-propos">A propos</Link>
        <Link className="nav-link my-auto" to="/anytimeFitness/nos-coachs">Nos coachs</Link>
        <Link className="nav-link my-auto" to="/anytimeFitness/contact">Contact</Link>
        <Link className="nav-link my-auto" exact to="/anytimeFitness/dashboard-admin">{adminAuth.user.fullName}</Link>
        <Link className="nav-link my-auto" to="/anytimeFitness/connexion">
            <Button className="button-sign my-auto" variant="" onClick={AdminLogout} >
                 <FiLogOut className="mb-1"/>
            </Button>
        </Link>
    </Nav>
  </Navbar.Collapse>
 </Navbar>
    );
  };


  const renderNonLoggedInLinks = () => {
    return (
      <Navbar className={colorChange ? 'navbar colorChange' : 'navbar'} fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
        <Link className="nav-link my-auto" to="/">Coaching sportif</Link>
        <Link className="nav-link my-auto" to="/anytimeFitness/a-propos">A propos</Link>
        <Link className="nav-link my-auto" to="/anytimeFitness/nos-coachs">Nos coachs</Link>
        <Link className="nav-link my-auto" to="/anytimeFitness/contact">Contact</Link>
        <div className="d-flex">
        <Button className="button-sign my-auto" variant="" >
          <FaUser className="mb-1"/>
        </Button>
       <div className="my-auto">
         {['left'].map((direction) => (
      <DropdownButton
        as={ButtonGroup}
        key={direction}
        id={`dropdown-button-drop-${direction}`}
        drop={direction}
        variant=""
        className=""
      >
              <Dropdown.Item href="" className="">
                <Link className="nav-link my-auto" to="/anytimeFitness/connexion-client">
                  <Button className="button-sign my-auto" variant="" >
                    <RiUserSearchLine className="mb-1"/> client
                  </Button>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item href="" >
                <Link className="nav-link my-auto" to="/anytimeFitness/connexion-coach">
                  <Button className="button-sign my-auto" variant="" >
                    <GrUserExpert className="mb-1"/> coach
                  </Button>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item href="" >
                <Link className="nav-link my-auto" to="/anytimeFitness/connexion-admin">
                  <Button className="button-sign my-auto" variant="" >
                    <GrUserAdmin className="mb-1"/> admin
                  </Button>
                </Link>
              </Dropdown.Item>
      </DropdownButton>
    ))}

        </div>
     
  </div>      
    </Nav>
  </Navbar.Collapse>
 </Navbar>
    );
  };
    
  const nav = () => {
    { 
    if(auth.authenticate){
    return renderLoggedInLinks()
  } else if (coachAuth.authenticate){
    return coachLoggedInLinks()
  } else if (adminAuth.authenticate){
    return adminLoggedInLinks()
  } else {
    return renderNonLoggedInLinks()
  } 
} 
}
  return(
<div className="">
{/* 
{   auth.authenticate ? renderLoggedInLinks()
  : coachAuth.authenticate ? coachLoggedInLinks()
  : renderNonLoggedInLinks()
} */}

{nav()}

</div>
)}
export default NavBar

