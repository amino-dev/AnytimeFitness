import {Button,Table } from 'react-bootstrap';
import {FaHome,FaUserMinus} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import '../css/dashboard-coach/dashboard.css'
import {deleteUser } from '../../../../redux/actions/users-actions';
import {useDispatch} from 'react-redux';
import {signout} from "../../../../redux/actions/userAuthActions"
import UpdateProfile from './updateProfile';
import BookingUser from './bookingUser'

const Profile = () => {
    const auth = useSelector((state) => state.auth)

    const dispatch = useDispatch()

     // delete a coach
    const delUser=(id)=>{
    dispatch (deleteUser(id)) 
    }

    const userLogout = () => {
        dispatch( signout())
    };

      const UserLogout = () =>{
        window.location.reload(userLogout())
    }
    
    
return(
<div className='className="mt-5 pt-5'>
    <h4 className="mt-5 py-5 ml-4">MON PROFIL</h4>
    <div className="d-flex justify-content-center mt-4">
    <Table striped bordered hover size="sm" className="w-75">
                    <tbody>
                        <tr>
                            <th className="pt-3 text-center">ID</th>
                            <td className="pt-3 text-center">{auth.user._id}</td>
                        </tr>
                        <tr>
                            <th className="pt-3 text-center">Nom</th>
                            <td className="pt-3 text-center">{auth.user.name} {auth.user.lastname}</td>
                        </tr>
                        <tr>
                            <th className="pt-3 text-center">Ville</th>
                            <td className="pt-3 text-center">{auth.user.city}</td>
                        </tr>
                        <tr>
                            <th className="pt-3 text-center">Téléphone</th>
                            <td className="pt-3 text-center">{auth.user.tel}</td>
                        </tr>
                        <tr>
                            <th className="pt-3 text-center">Email</th>
                            <td className="pt-3 text-center">{auth.user.email}</td>
                        </tr>
                    </tbody>
                </Table>
    </div>
    <div className="d-flex justify-content-center">
     <Button className="btn-icon" ><FaUserMinus className="btn-icon" onClick={ () => {UserLogout(); delUser(auth.user._id)}} /></Button>
     <UpdateProfile id={auth.user._id} el={auth.user}/>
    </div>
    <h4 className="mt-5 ml-4">MES RÉSERVATIONS</h4>
    <BookingUser/>
</div> 
)}
export default Profile