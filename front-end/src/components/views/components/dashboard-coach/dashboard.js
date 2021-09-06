import {Tab, Nav, Row, Col } from 'react-bootstrap';
import {FaUserAlt, FaThumbtack, FaCheck} from 'react-icons/fa'
import logo from '../../../../img/logo.png'
import {useSelector} from 'react-redux';
import '../css/dashboard-coach/dashboard.css'
import Profile from './profile';
import Post from './post'
import BookingCoach from './bookingCoach'

const Dashboard = () => {
    const coachAuth = useSelector((state) => state.coachAuth)
return(
  <div className='dashboard'>
  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col lg={3} xs={12} sm={12} className="panel">
    <div className="d-flex justify-content-center">
      <img src={logo} className="App-logo mt-4" alt="logo" />
    </div>
    <div className="admin-brand p-2 px-3 d-flex justify-content-around m-3 mt-5">
     <h5 className="my-auto">{coachAuth.user.fullName}</h5>
    </div>
   
      <Nav variant="pills" className="flex-column mt-4">
        <Nav.Item>
          <Nav.Link eventKey="first"><FaUserAlt className="mr-3"/><span className="dashboard-link">Profil</span></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second"><FaThumbtack className="mr-3"/><span className="dashboard-link">Publications</span></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third"><FaCheck className="mr-3"/><span className="dashboard-link">Réservations</span></Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col lg={9} xs={12} sm={12}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
           <Profile />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <Post/>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <BookingCoach />
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>

  </div>
  
)}
export default Dashboard