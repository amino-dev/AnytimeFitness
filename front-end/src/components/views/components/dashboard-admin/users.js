import {Button,Table } from 'react-bootstrap';
import {FaHome,FaUserMinus} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { deleteUser, getAllUsers } from '../../../../redux/actions/users-actions';
import {useDispatch, useSelector } from 'react-redux'
import '../css/dashboard-coach/dashboard.css'


const Users = () => {
    const users = useSelector(state => state.UsersReducer.datas)

    // get all users
    const dispatch = useDispatch()
    useEffect(() => {
    dispatch(getAllUsers())
    }, [dispatch])
    console.log("my data",users)

    // delete a user
    const delUser=(id)=>{
    dispatch (deleteUser(id)) 
    }

return(
<div>
<div className="container">
<div className='className="mt-4'>
   <Link to="/" className="ml-3 btn-icon"><FaHome className="dash-icon my-4"/></Link> 
</div> 
{users.map((user,key ) => (
 <div key={key}>
   <div className="d-flex justify-content-center mt-4">
                <Table striped bordered hover size="sm" width="100%">
                    <tbody>
                        <tr>
                            <th className="pt-3 text-center">ID</th>
                            <td className="pt-3 text-center">{user._id}</td>
                        </tr>
                        <tr>
                            <th className="pt-3 text-center">Nom</th>
                            <td className="pt-3 text-center">{user.name} {user.lastname}</td>
                        </tr>
                        <tr>
                            <th className="pt-3 text-center">Ville</th>
                            <td className="pt-3 text-center">{user.city}</td>
                        </tr>
                        <tr>
                            <th className="pt-3 text-center">Téléphone</th>
                            <td className="pt-3 text-center">{user.tel}</td>
                        </tr>
                        <tr>
                            <th className="pt-3 text-center">Email</th>
                            <td className="pt-3 text-center">{user.email}</td>
                        </tr>
                    </tbody>
                </Table>
    </div>
    <div className="d-flex justify-content-center">
        <Button className="btn-icon" ><FaUserMinus className="btn-icon mb-5" onClick={() => delUser(user._id)}/></Button>
    </div>
  </div>
))
}
 </div>
</div>

)}
export default Users