import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';
import {useDispatch} from 'react-redux'
import {FaPencilAlt} from 'react-icons/fa'
import {updateBooking} from '../../../../redux/actions/bookingActions';

const UpdateBooking = ({el,id}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const [update,setUpdate]=useState({bookingDate:el.bookingDate,bookingTime:el.bookingTime,speciality:el.speciality,place:el.place,status:el.status})
    
    // handelInput
    const handleChange=(e)=>{
        const {name,value}=e.target
        setUpdate({
            ...update,
            [name]:value
        })
        console.log("input",update)
    }

    // update Product
    const Updatebooking=()=>{
        dispatch (updateBooking(id, 
            update.bookingDate,
            update.bookingTime,
            update.speciality,
            update.place,
            update.status,
            )) 
        console.log("update",update)
        setShow(false)
        }


  return(
    <div>
     <div className='container mt-1'>
      <Button className="btn-icon" ><FaPencilAlt className="btn-icon" onClick={handleShow} /></Button>
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modifier une réservation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                     <Form.Control type="date" name="bookingDate"
                     defaultValue={el.bookingDate} 
                     onChange={handleChange}
                     className ="contact-input"
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="time" name="bookingTime"
                     defaultValue={el.bookingTime}
                     onChange={handleChange}
                     className ="contact-input"
                      />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="speciality" 
                     onChange={handleChange}
                     defaultValue={el.speciality}
                     className ="contact-input"
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="place" 
                     onChange={handleChange}
                     defaultValue={el.place}
                     className ="contact-input"
                      />   
                </Form.Group>
                <div className="hidden">
                  <Form.Group className="mb-3">
                     <Form.Control type="text" name="status" 
                     onChange={handleChange}
                     defaultValue={el.status}
                     className ="contact-input"
                     />
                  </Form.Group>
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" type="submit" onClick={Updatebooking} className="top-btn">Modifier</Button>
            </Modal.Footer>
          </Modal>
</div>
</div>
   )

 }

export default UpdateBooking