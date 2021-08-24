import {Button,Table } from 'react-bootstrap';
import {FaHome,FaUserMinus} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import '../css/dashboard-coach/dashboard.css'
import UpdateProfile from './update-profile'


const Profile = () => {
    const coachAuth = useSelector((state) => state.coachAuth)
return(
<div className='className="mt-4'>
   <Link to="/" className="ml-3 btn-icon"><FaHome className="dash-icon my-4"/></Link> 
    <div className="d-flex justify-content-center mt-4">
     <Table striped bordered hover  size="sm">
      <thead>
       <tr>
        <th width="" className="text-center">ID</th>
        <th width="" className="text-center">Nom</th>
        <th width="" className="text-center">Prénom</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td className="pt-3 text-center ">{coachAuth.user._id}</td>
        <td className="pt-3 text-center">{coachAuth.user.name}</td>
        <td className="pt-3 text-center">{coachAuth.user.lastname}</td>
       </tr>
      </tbody>
      <thead>
       <tr>
        <th width="" className="text-center">Email</th>
        <th width="" className="text-center">Ville</th>
        <th width="" className="text-center">Téléphone</th>
       </tr> 
      </thead>
      <tbody>
       <tr>
        <td className="pt-3 text-center">{coachAuth.user.email}</td>
        <td className="pt-3 text-center">{coachAuth.user.city}</td>
        <td className="pt-3 text-center">{coachAuth.user.tel}</td>
       </tr>
      </tbody>
     </Table>
    </div>
    <div className="d-flex justify-content-center">
     <Button className="btn-icon" ><FaUserMinus className="btn-icon" /></Button>
     <UpdateProfile id={coachAuth.user._id} el={coachAuth.user}/>
    </div>
</div> 
)}
export default Profile