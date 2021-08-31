import {Tab, Nav, Row, Col } from 'react-bootstrap';
import {RiUserSearchFill} from 'react-icons/ri'
import {FaThumbtack,FaComment,FaUserCheck} from 'react-icons/fa'
import {RiMessage2Fill} from 'react-icons/ri'
import logo from '../../../../img/logo.png'
import {useSelector} from 'react-redux';
import '../css/dashboard-coach/dashboard.css'
import Users from "./users"
import Coachs from './coachs';
import Posts from './posts';
import Comments from './comments';
import Contact from './contact'

const Dashboard = () => {
    const adminAuth = useSelector((state) => state.adminAuth)
return(
  <div className='dashboard'>
  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col lg={3} xs={3} sm={3} className="panel">
    <div className="d-flex justify-content-center">
      <img src={logo} className="App-logo mt-4" alt="logo" />
    </div>
    <div className="admin-brand p-2 px-3 d-flex justify-content-around m-3 mt-5">
     <h5 className="my-auto">{adminAuth.user.fullName}</h5>
    </div>
   
      <Nav variant="pills" className="flex-column mt-4">
        <Nav.Item>
          <Nav.Link eventKey="first"><RiUserSearchFill className="mr-3"/><span className="dashboard-link">Profils des clients</span></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second"><FaUserCheck className="mr-3"/><span className="dashboard-link">Profils des coachs</span></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third"><FaThumbtack className="mr-3"/><span className="dashboard-link">Publications</span></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth"><FaComment className="mr-3"/><span className="dashboard-link">Commentaires</span></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fifth"><RiMessage2Fill className="mr-3"/><span className="dashboard-link">Formulaires</span></Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col lg={9} xs={12} sm={12}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <Users/>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <Coachs/>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
           <Posts/>
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
           <Comments/>
        </Tab.Pane>
        <Tab.Pane eventKey="fifth">
          <Contact/>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>

  </div>
  
)}
export default Dashboard