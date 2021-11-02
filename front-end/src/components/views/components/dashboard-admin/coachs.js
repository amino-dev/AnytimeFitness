import {Button,Table } from 'react-bootstrap';
import {FaHome,FaUserMinus} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { deleteCoach, getAllCoachs } from '../../../../redux/actions/coachsActions';
import UpdateCoachStatus from "./updateCoach"
import {useDispatch, useSelector } from 'react-redux'
import '../css/dashboard-coach/dashboard.css'


const Coachs = () => {
    const coachs = useSelector(state => state.CoachsReducer.datas)

     // get all coachs
    const dispatch = useDispatch()
    useEffect(() => {
    dispatch(getAllCoachs())
    }, [dispatch])
    console.log("my data",coachs)

    // delete a coach
    const delCoach=(id)=>{
    dispatch (deleteCoach(id)) 
    }

return(
<div>
<div className="container">
<div className='className="mt-4'>
   <Link to="/" className="ml-3 btn-icon"><FaHome className="dash-icon my-4"/></Link> 
</div> 
{coachs.map((coach,key ) => (
 <div key={key}>
   <div className="d-flex justify-content-center mt-4">
   <Table striped bordered hover size="sm" width="100%">
                    <tbody>
                        <tr>
                            <th className="pt-3 text-center">Nom</th>
                            <td className="pt-3 text-center">{coach.name} {coach.lastname}</td>
                        </tr>
                        <tr>
                            <th className="pt-3 text-center">Ville</th>
                            <td className="pt-3 text-center">{coach.city}</td>
                        </tr>
                        <tr>
                            <th className="pt-3 text-center">Téléphone</th>
                            <td className="pt-3 text-center">{coach.tel}</td>
                        </tr>
                        <tr>
                            <th className="pt-3 text-center">Email</th>
                            <td className="pt-3 text-center">{coach.email}</td>
                        </tr>
                        <tr>
                            <th className="pt-3 text-center">Status</th>
                            <td className="pt-3 text-center">{coach.status}</td>
                        </tr>
                    </tbody>
                </Table>
    </div>
    <div className="d-flex justify-content-center">
        <Button className="btn-icon" ><FaUserMinus className="btn-icon mb-5" onClick={() => delCoach(coach._id)}/></Button>
        <div className="updateBtn">
            <UpdateCoachStatus id={coach._id}  el={coach }/>
        </div>
    </div>
  </div>
))
}
 </div>
</div>

)}
export default Coachs