import {Table,Button} from 'react-bootstrap'
import {FaHome} from 'react-icons/fa'
import {BsFillTrashFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux'
import '../css/dashboard-coach/dashboard.css'
import { deleteBooking, getAllBookings } from '../../../../redux/actions/bookingActions';


const Bookings = () => {
    const bookings = useSelector(state => state.bookingReducer.datas)

    // get all bookings
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getAllBookings())
    }, [dispatch])
    console.log("my data",bookings)

     // delete a booking
     const delBooking=(id)=>{
        dispatch (deleteBooking(id)) 
      }

return(
<div>
<div className="container">
<div className='className="mt-4'>
   <Link to="/" className="ml-3 btn-icon"><FaHome className="dash-icon my-4"/></Link> 
</div> 
<div className="container">
             {bookings.map((booking,key ) => (
            <div key={key}>
               <div className="d-flex justify-content-center mt-4">
               <Table striped bordered hover size="sm" width="100%">
                    <tbody>
                        <tr>
                            <th className="pt-3 text-center">Nom du coach</th>
                            <td className="pt-3 text-center">{booking.coachName}</td>
                        </tr>
                        <tr>
                            <th className="pt-3 text-center">Nom du client</th>
                            <td className="pt-3 text-center">{booking.clientName}</td>
                        </tr>
                        <tr>
                            <th className="pt-3 text-center">Date d'envoi</th>
                            <td className="pt-3 text-center">{booking.date}</td>
                        </tr>
                        <tr>
                            <th className="pt-3 text-center">Date de réservation</th>
                            <td className="pt-3 text-center">{booking.bookingDate}</td>
                        </tr>     
                        <tr>
                            <th className="pt-3 text-center">Temps de réservation</th>
                            <td className="pt-3 text-center">{booking.bookingTime}</td>
                        </tr> 
                        <tr>
                            <th className="pt-3 text-center">Spécialité demandée</th>
                            <td className="pt-3 text-center">{booking.speciality}</td>
                        </tr> 
                        <tr>
                            <th className="pt-3 text-center">Déroulement de la séance</th>
                            <td className="pt-3 text-center">{booking.place}</td>
                        </tr> 
                        <tr>
                            <th className="pt-3 text-center">Adresse</th>
                            <td className="pt-3 text-center">{booking.adress}</td>
                        </tr> 
                        <tr>
                            <th className="pt-3 text-center">Status de la réservation</th>
                            <td className="pt-3 text-center">{booking.status}</td>
                        </tr> 

                    </tbody>
                </Table>   
              </div>
              <div className="d-flex justify-content-center">
                    <Button className="btn-icon" ><BsFillTrashFill className="btn-icon mb-5" onClick={() => delBooking(booking._id)} /></Button>
              </div>
            </div>
          ))
        }
        </div>
    </div>
</div>

)}
export default Bookings