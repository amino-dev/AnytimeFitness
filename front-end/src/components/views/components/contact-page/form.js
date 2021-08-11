import '../css/contact-page/form.css'
import { Button, Form } from "react-bootstrap"
import { FaUserAlt, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import { SiGooglemessages } from "react-icons/si"
import { BiSend } from "react-icons/bi"
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addNewContact } from "../../../../redux/actions/contactActions"



function ContactForm(){
  const [input,setInput]=useState({name :"", lastname :"", city :"", email :"", tel :"", message :""})
  
  const handleChange=(e)=>{
      const {name,value}=e.target
      setInput({
          ...input,
          [name]:value
      })
      console.log("input",input)
  }
  
  const dispatch = useDispatch()   

  const addContact=()=>{
        dispatch (addNewContact(input.name, input.lastname,input.city ,input.email , input.tel, input.message)) 
        console.log("inpuuuuuuuuuuuut",input)
  }

  return(
  <div className="">
       <h2 className="text-center my-5 pt-4">CONTACTEZ-NOUS</h2>
       <div className="text-center mb-5">
             <p>Une question ? Besoin d'aide ou d'informations ?</p>
             <p>Nous sommes à votre écoute. N'hésitez pas à nous contacter !</p>
             <p>🎁 Si vous souhaitez offrir un bon cadeau, pensez à le préciser afin que nous puissions vous l'envoyer.</p>
       </div>      
       <Form className="contact-form">
            <Form.Group className="mb-3">
                   <div className="d-flex">
                         <FaUserAlt className="mt-2 mr-2 contact-icons"/>
                         <Form.Control  className ="contact-input" 
                          type="text" name="name" 
                          onChange={handleChange}
                          placeholder="Ecrivez votre prénom ici.." />
                   </div>    
             </Form.Group>
             <Form.Group className="mb-3">
                   <div className="d-flex">
                         <FaUserAlt className="mt-2 mr-2 contact-icons"/>
                         <Form.Control  className ="contact-input"
                          type="text" name="lastname" 
                          onChange={handleChange}
                          placeholder="Ecrivez votre nom ici.." />
                   </div>    
             </Form.Group>
             <Form.Group className="mb-3">
                   <div className="d-flex">
                         <FaMapMarkerAlt className="mt-2 mr-2 contact-icons"/>
                         <Form.Control  className ="contact-input"
                          type="text"  name="city" 
                          onChange={handleChange}
                          placeholder="Ecrivez votre ville ici.." />
                   </div>    
             </Form.Group>
             <Form.Group className="mb-3">
                   <div className="d-flex">
                         <GrMail className="mt-2 mr-2 contact-icons"/>
                         <Form.Control  className ="contact-input"
                          type="email" name="email" 
                          onChange={handleChange}
                          placeholder="Ecrivez votre email ici.."/>
                   </div>    
             </Form.Group>
             <Form.Group className="mb-3">
                   <div className="d-flex">
                         <FaPhoneAlt className="mt-2 mr-2 contact-icons"/>
                         <Form.Control  className ="contact-input" 
                          type="number" name="tel" 
                          onChange={handleChange}
                          placeholder="Ecrivez votre numéro de téléphone ici.." />
                   </div>    
             </Form.Group>
             <Form.Group className="mb-3">
                   <div className="d-flex">
                         <SiGooglemessages className="mt-3 mr-2 contact-icons"/>
                         <Form.Control   as="textarea"  rows={5}  cols={40} className ="contact-input" 
                          type="text" name="message"
                          onChange={handleChange}
                          placeholder="Ecrivez votre mesage ici.." />
                   </div>    
             </Form.Group>
             <Button  className="my-auto contact-button" variant="outline-dark" onClick = {() => addContact()} >
                  <BiSend />
             </Button>
      </Form>
    </div>
)}
export default  ContactForm