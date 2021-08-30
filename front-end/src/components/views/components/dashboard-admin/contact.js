import {Table,Button} from 'react-bootstrap'
import {FaHome} from 'react-icons/fa'
import {BsFillTrashFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { deleteContact, getAllContacts} from '../../../../redux/actions/contactActions';
import {useDispatch, useSelector } from 'react-redux'
import '../css/dashboard-coach/dashboard.css'


const Contact = () => {
    const contacts = useSelector(state => state.contactReducer.datas)
     
    // add contact forms
    const dispatch = useDispatch()
    useEffect(() => {
     dispatch(getAllContacts())
      }, [dispatch])
    console.log("my data",contacts)

    //delete a contact form
    const delContact=(id)=>{
      dispatch (deleteContact(id)) 
      }

return(
<div>
 <div className="container">
  <div className='className="mt-4'>
   <Link to="/" className="ml-3 btn-icon"><FaHome className="dash-icon my-4"/></Link> 
  </div> 
  <div className="container">
            {contacts.map((contact,key ) => (
            <div key={key}>
               <div className="d-flex justify-content-center mt-4">
                <Table striped bordered hover size="sm" width="100%">
                    <tbody>
                        <tr>
                            <th className="pt-3 text-center">Nom</th>
                            <td className="pt-3 text-center">{contact.name} {contact.lastname}</td>
                        </tr>
                        <tr>
                            <th className="pt-3 text-center">Date</th>
                            <td className="pt-3 text-center">{contact.date}</td>
                        </tr>
                        <tr>
                            <th className="pt-3 text-center">Ville</th>
                            <td className="pt-3 text-center">{contact.city}</td>
                        </tr>
                        <tr>
                            <th className="pt-3 text-center">Téléphone</th>
                            <td className="pt-3 text-center">{contact.tel}</td>
                        </tr>
                        <tr>
                            <th className="pt-3 text-center">Email</th>
                            <td className="pt-3 text-center">{contact.email}</td>
                        </tr>
                        <tr>
                            <th className="pt-3 text-center">Message</th>
                            <td className="pt-3 text-center">{contact.message}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className="d-flex justify-content-center">
                <Button className="btn-icon" ><BsFillTrashFill className="btn-icon mb-5" onClick={() => delContact(contact._id)}/></Button>
            </div>
   </div>
))
}
  </div>
 </div>
</div>

)}
export default Contact