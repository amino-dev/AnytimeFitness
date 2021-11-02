import {Button,Table } from 'react-bootstrap';
import {FaHome,FaUserMinus} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import '../css/dashboard-coach/dashboard.css'
import {deleteCoach } from '../../../../redux/actions/coachsActions';
import {useDispatch} from 'react-redux';
import UpdateProfile from './update-profile'
import { coachSignout } from "../../../../redux/actions/coachAuthActions"

const Profile = () => {
    const coachAuth = useSelector((state) => state.coachAuth)

    const dispatch = useDispatch()

     // delete a coach
    const delCoach=(id)=>{
    dispatch (deleteCoach(id)) 
    }

    const coachLogout = () => {
        dispatch(coachSignout())
    };

      const CoachLogout = () =>{
        window.location.reload(coachLogout())
    }
    
    
return(
<div className='className="mt-4'>
   <Link to="/" className="ml-3 btn-icon"><FaHome className="dash-icon my-4"/></Link> 
    <div className="d-flex justify-content-center mt-4">
    <Table striped bordered hover size="sm" width="100%">
                    <tbody>
                        <tr>
                            <th className="pt-3 text-center">Nom</th>
                            <td className="pt-3 text-center">{coachAuth.user.name} {coachAuth.user.lastname}</td>
                        </tr>
                        <tr>
                            <th className="pt-3 text-center">Ville</th>
                            <td className="pt-3 text-center">{coachAuth.user.city}</td>
                        </tr>
                        <tr>
                            <th className="pt-3 text-center">Téléphone</th>
                            <td className="pt-3 text-center">{coachAuth.user.tel}</td>
                        </tr>
                        <tr>
                            <th className="pt-3 text-center">Email</th>
                            <td className="pt-3 text-center">{coachAuth.user.email}</td>
                        </tr>
                    </tbody>
                </Table>
    </div>
    <div className="d-flex justify-content-center">
     <Button className="btn-icon" ><FaUserMinus className="btn-icon" onClick={ () => {CoachLogout(); delCoach(coachAuth.user._id)}} /></Button>
     <UpdateProfile id={coachAuth.user._id} el={coachAuth.user}/>
    </div>
</div> 
)}
export default Profile