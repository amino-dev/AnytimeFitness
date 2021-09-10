import '../css/contact-page/form.css'
import { Button, Form, InputGroup} from "react-bootstrap"
import { FaUserAlt, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import { SiGooglemessages } from "react-icons/si"
import { BiSend } from "react-icons/bi"
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addNewContact } from "../../../../redux/actions/contactActions"



function ContactForm(){
 const [validated, setValidated] = useState(false);

 const handleSubmit = (event) => {
  const form = event.currentTarget;
      if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
      }
        setValidated(true);
 }

 function changeHeight() {
       document.getElementById("contact-form").style.height = "950px";
 }

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
       <div className="text-center mb-4">
             <p>Une question ? Besoin d'aide ou d'informations ?</p>
             <p>Nous sommes à votre écoute. N'hésitez pas à nous contacter !</p>
             <p>🎁 Si vous souhaitez offrir un bon cadeau, pensez à le préciser afin que nous puissions vous l'envoyer. 🎁</p>
       </div>      
      <Form className="form contact-form" noValidate validated={validated} onSubmit={handleSubmit} id="contact-form" >
            <Form.Group  className="mb-5">
             <InputGroup >
              <InputGroup.Prepend>
                 <InputGroup.Text>
                   <FaUserAlt className="mr-2"/>
                 </InputGroup.Text>
              </InputGroup.Prepend>
                 <Form.Control  className ="contact-input"
                      type="text" name="name" 
                      required
                      onChange={handleChange}
                      placeholder="Ecrivez votre prénom ici.." />
                     <Form.Control.Feedback className="my-2 ml-5">Bien fait!</Form.Control.Feedback>
                     <Form.Control.Feedback  type="invalid" className="my-2 ml-5">Entrez votre prénom SVP!</Form.Control.Feedback>
             </InputGroup>
            </Form.Group>
            <Form.Group  className="mb-5">
             <InputGroup >
              <InputGroup.Prepend>
                 <InputGroup.Text>
                   <FaUserAlt className="mr-2"/>
                 </InputGroup.Text>
              </InputGroup.Prepend>
                 <Form.Control  className ="contact-input"
                      type="text" name="lastname" required
                      onChange={handleChange}
                      placeholder="Ecrivez votre nom ici.." />
                      <Form.Control.Feedback className="my-2 ml-5">Bien fait!</Form.Control.Feedback>
                      <Form.Control.Feedback  type="invalid" className="my-2 ml-5">Entrez votre nom SVP!</Form.Control.Feedback>
             </InputGroup>
            </Form.Group>
            <Form.Group  className="mb-5">
             <InputGroup >
              <InputGroup.Prepend>
                 <InputGroup.Text>
                   <FaMapMarkerAlt  className="mr-2"/>
                 </InputGroup.Text>
              </InputGroup.Prepend>
                 <Form.Control  className ="contact-input"
                     type="text"  name="city" required
                     onChange={handleChange}
                     placeholder="Ecrivez votre ville ici.." />
                     <Form.Control.Feedback className="my-2 ml-5">Bien fait!</Form.Control.Feedback>
                     <Form.Control.Feedback  type="invalid" className="my-2 ml-5">Entrez votre ville SVP!</Form.Control.Feedback>
             </InputGroup>
            </Form.Group>
            <Form.Group  className="mb-5">
             <InputGroup >
              <InputGroup.Prepend>
                 <InputGroup.Text>
                   <GrMail  className="mr-2"/>
                 </InputGroup.Text>
              </InputGroup.Prepend>
                 <Form.Control  className ="contact-input"
                    type="email" name="email" required
                    onChange={handleChange}
                    placeholder="Ecrivez votre email ici.."/>
                    <Form.Control.Feedback className="my-2 ml-5">Bien fait!</Form.Control.Feedback>
                    <Form.Control.Feedback  type="invalid" className="my-2 ml-5">Entrez votre mail SVP!</Form.Control.Feedback>
             </InputGroup>
            </Form.Group>
            <Form.Group  className="mb-5">
             <InputGroup >
              <InputGroup.Prepend>
                 <InputGroup.Text>
                 <FaPhoneAlt className="mr-2"/>
              </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control  className ="contact-input" 
                 type="number" name="tel" required
                 onChange={handleChange}
                 placeholder="Ecrivez votre numéro ici.." />
             <Form.Control.Feedback className="my-2 ml-5">Bien fait!</Form.Control.Feedback>
             <Form.Control.Feedback  type="invalid" className="my-2 ml-5">Entrez votre numéro SVP!</Form.Control.Feedback>
             </InputGroup>
            </Form.Group>
            <Form.Group  className="mb-5">
             <InputGroup >
              <InputGroup.Prepend>
                 <InputGroup.Text>
                     <SiGooglemessages className="mb-5 mr-2 message-icon"/>
              </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control   as="textarea"  rows={5}  cols={40} className ="contact-input" 
                type="text" name="message" required
                onChange={handleChange}
                placeholder="Ecrivez votre mesage ici.." />
              <Form.Control.Feedback className="my-2 ml-5">Bien fait!</Form.Control.Feedback>
              <Form.Control.Feedback  type="invalid" className="my-2 ml-5">Entrez votre message SVP!</Form.Control.Feedback>
             </InputGroup>
            </Form.Group>
            <Button  className="my-auto contact-button" type="submit" variant="outline-dark" onClick={ () => {addContact(); changeHeight()}} >
                  <BiSend />
            </Button>
      </Form>
    </div>
)}
export default  ContactForm