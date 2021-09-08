import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';
import {useDispatch} from 'react-redux'
import {FaPencilAlt} from 'react-icons/fa'
import {UpdateCoach} from '../../../../redux/actions/coachsActions';
import { FaUserAlt, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import Input from "../connection-page/input"

const UpdateCoachStatus = ({el,id}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const [update,setUpdate]=useState({name:el.name,lastname:el.lastname,email:el.email,city:el.city,tel:el.tel,status:el.status})
    
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
    const Updatecoach=()=>{
        dispatch (UpdateCoach(id, 
            update.name, update.lastname,update.email,update.city ,update.tel,update.status
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
              <Modal.Title>Modifier le status du coach</Modal.Title>
               </Modal.Header>
             <Modal.Body>
                <Form>
                    <div className="hidden">
                        <Input   type="text" name="name" defaultValue={el.name}  onChange={handleChange}/>
                    </div>
                    <div className="hidden">
                        <Input   type="text" name="lastname" defaultValue={el.lastname}  onChange={handleChange}/>
                    </div>
                    <div className="hidden">
                        <Input  type="text" name="city" defaultValue={el.city}  onChange={handleChange} />
                    </div>
                    <div className="hidden">
                       <Input   type="number" name="tel" defaultValue={el.tel}  onChange={handleChange} />
                    </div>
                    <div className="hidden">
                      <Input  type="email" name="email" defaultValue={el.email}  onChange={handleChange} />
                    </div>
                    <div className="">
                        <Input  type="string" name="status" defaultValue={el.status}  onChange={handleChange}/>
                    </div>
                    <div className="d-flex justify-content-end ">
                        <Button variant="primary" type="submit" onClick={Updatecoach} className="top-btn">Modifier</Button>
                    </div>
                </Form>
            </Modal.Body>
          </Modal>
        </div>
    </div>
   )
 }

export default UpdateCoachStatus