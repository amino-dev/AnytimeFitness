import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {FaPen} from 'react-icons/fa'
import { FaUserAlt, FaMapMarkerAlt, FaPhoneAlt, FaKey } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import Input from "../connection-page/input"
import  Update from "../../../../redux/actions/coachAuthActions"


const UpdateProfile = ({id,el}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const coachAuth = useSelector((state) => state.coachAuth);
    const dispatch = useDispatch();
    const [update,setUpdate]=useState({name:el.name,lastname:el.lastname,city:el.city,tel:el.tel, password: el.password,email:el.email})
    const handleChange=(e)=>{
        const {name,value}=e.target
        setUpdate({
            ...update,
            [name]:value
        })
        console.log("input",update)
    }
    // update profile

    const updatePr=()=>{
        dispatch (Update(id,update.name, update.lastname,update.city ,update.tel,update.email,update.password)) 
        console.log("update",update)
        setShow(false)
        }


  return(
    <div>
    <div className='container mt-5'>
<Button className="btn-icon dash-icon edit-icon" onClick={handleShow}><FaPen/></Button>
<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title className="title-modal">MODIFIER MON PROFIL</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form >
<div className="d-flex mb-3">
                             <FaUserAlt  className="mr-2 mt-2 logo-login"/>
                             <Input   type="text" name="name" defaultValue={el.name}  onChange={handleChange}/>
                           </div>
                           <div className="d-flex mb-3">
                             <FaUserAlt className="mr-2 mt-2 logo-login"/>
                             <Input   type="text" name="lastname" defaultValue={el.lastname}  onChange={handleChange}/>
                           </div>
                           <div className="d-flex mb-3">
                             <FaMapMarkerAlt className="mr-2 mt-2 logo-login"/>
                             <Input  type="text" name="city" defaultValue={el.city}  onChange={handleChange}/>
                           </div>
                           <div className="d-flex mb-3">
                             <FaPhoneAlt className="mr-2 mt-2 logo-login"/>
                             <Input   type="number" name="tel" defaultValue={el.tel}  onChange={handleChange}/>
                           </div>
                           <div className="d-flex mb-3">
                             <GrMail  className="mr-2 mt-2 logo-login"/>
                             <Input  type="email" name="email" defaultValue={el.email}  onChange={handleChange}/>
                           </div>
                           <div className="d-flex">
                             <FaKey  className="mr-2 mt-2 logo-login"/>
                             <Input  type="password"  name="password" defaultValue={el.password}  onChange={handleChange} />
                           </div>
<div className="d-flex justify-content-end">
<Button className="mr-2 " variant="secondary" onClick={handleClose}>  
Close
</Button>

<Button onClick={updatePr} >Update</Button>
</div>
</Form>
</Modal.Body>



</Modal>
</div>
</div>
   )

 }

export default UpdateProfile