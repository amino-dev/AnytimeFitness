import {Table,Button} from 'react-bootstrap';
import {BsFillTrashFill} from 'react-icons/bs'
import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import '../css/dashboard-coach/dashboard.css'
import {useEffect} from 'react';
import UpdateBooking from "./updateBooking"
import {deleteBooking, getAllBookings} from '../../../../redux/actions/bookingActions';



const BookingCoach = () => {
    const bookings = useSelector(state => state.bookingReducer.datas)


   const coachAuth = useSelector((state) => state.coachAuth)
  
  //get all bookings
  const dispatch = useDispatch()
   useEffect(() => {
   dispatch(getAllBookings())
    }, [dispatch])
   console.log("my data",bookings)
  

  //delete a booking
     const delBooking=(id)=>{
      dispatch (deleteBooking(id)) 
    }
        return (

  <div className="container">
    <Link to="/" className="btn-icon"><FaHome className="dash-icon home-icon my-4"/></Link> 
  {Object.keys(bookings).filter((id) => {
      if ((bookings[id].coachName.toLowerCase() === coachAuth.user.fullName.toLowerCase())) {
       return id
     }
    }).map(id=>
     <div className="ml-3 mt-3">
        <div className="d-flex justify-content-center mt-4">
        <Table striped bordered hover size="sm" width="100%">
             <tbody>
                 <tr>
                     <th className="pt-3 text-center">Nom du client</th>
                     <td className="pt-3 text-center">{bookings[id].clientName}</td>
                 </tr>
                 <tr>
                     <th className="pt-3 text-center">Date d'envoi</th>
                     <td className="pt-3 text-center">{bookings[id].date}</td>
                 </tr>
                 <tr>
                     <th className="pt-3 text-center">Date de réservation</th>
                     <td className="pt-3 text-center">{bookings[id].bookingDate}</td>
                 </tr>     
                 <tr>
                     <th className="pt-3 text-center">Temps de réservation</th>
                     <td className="pt-3 text-center">{bookings[id].bookingTime}</td>
                 </tr> 
                 <tr>
                     <th className="pt-3 text-center">Spécialité demandée</th>
                     <td className="pt-3 text-center">{bookings[id].speciality}</td>
                 </tr> 
                 <tr>
                     <th className="pt-3 text-center">Déroulement de la séance</th>
                     <td className="pt-3 text-center">{bookings[id].place}</td>
                 </tr> 
                 <tr>
                     <th className="pt-3 text-center">Adresse</th>
                     <td className="pt-3 text-center">{bookings[id].adress}</td>
                 </tr> 
                 <tr>
                     <th className="pt-3 text-center">Status de la réservation</th>
                     <td className="pt-3 text-center">{bookings[id].status}</td>
                 </tr> 
             </tbody>
          </Table> 
         </div>
         <div className="d-flex justify-content-center">
            <Button className="btn-icon" ><BsFillTrashFill className="btn-icon" onClick={() => delBooking(bookings[id]._id)} /></Button>
            <UpdateBooking id={bookings[id]._id}  el={bookings[id]}/>
         </div>  
       </div> 
      )}
    </div>
   )}

export default BookingCoach