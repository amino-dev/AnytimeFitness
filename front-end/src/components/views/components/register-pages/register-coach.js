import '../css/register-pages/register-coach.css'
import { Button, Form, InputGroup} from "react-bootstrap"
import { FaUserAlt, FaMapMarkerAlt, FaPhoneAlt, FaTransgender, FaKey, FaUserShield } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import { RiFolderUserFill } from "react-icons/ri"
import { IoMdFitness } from "react-icons/io"
import { HiPhotograph } from "react-icons/hi"
import { useState } from "react"


function RegisterCoachForm(){
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
       document.getElementById("coach-form").style.height = "1375px";
 }
  return(
    <div className="">
       <h2 className="text-center my-5 pt-4">ENVOYER VOTRE CANDIDATURE</h2>  
       <Form className="form register-coach-form" noValidate validated={validated} onSubmit={handleSubmit} id="coach-form">
            <Form.Group  className="mb-5">
             <InputGroup >
              <InputGroup.Prepend>
                 <InputGroup.Text>
                   <FaTransgender className="mr-2 gender-icon"/>
                 </InputGroup.Text>
              </InputGroup.Prepend>
                  <Form.Check
                    className = "mr-3"
                    type="radio"
                    label="Homme"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    required
                   />
                   <Form.Check
                    type="radio"
                    label="Femme"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    required
                   />      
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
                      type="text" name="name" 
                      required
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
                     placeholder="Ecrivez votre ville ici.." />
                     <Form.Control.Feedback className="my-2 ml-5">Bien fait!</Form.Control.Feedback>
                     <Form.Control.Feedback  type="invalid" className="my-2 ml-5">Entrez votre ville SVP!</Form.Control.Feedback>
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
                 placeholder="Ecrivez votre numéro ici.." />
             <Form.Control.Feedback className="my-2 ml-5">Bien fait!</Form.Control.Feedback>
             <Form.Control.Feedback  type="invalid" className="my-2 ml-5">Entrez votre numéro SVP!</Form.Control.Feedback>
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
                    pattern = "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i"
                    placeholder="Ecrivez votre email ici.."/>
                 <Form.Control.Feedback className="my-2 ml-5">Bien fait!</Form.Control.Feedback>
                 <Form.Control.Feedback  type="invalid" className="my-2 ml-5">Entrez votre mail SVP!</Form.Control.Feedback>
             </InputGroup>
            </Form.Group>
            <Form.Group  className="mb-5">
             <InputGroup >
              <InputGroup.Prepend>
                 <InputGroup.Text>
                   <RiFolderUserFill className="mr-2"/>
                 </InputGroup.Text>
              </InputGroup.Prepend>
                 <Form.Control  className ="contact-input"
                    type="text" name="pseudo" required
                    placeholder="Ecrivez votre pseudo ici.."/>
                    <Form.Control.Feedback className="my-2 ml-5">Bien fait!</Form.Control.Feedback>
                    <Form.Control.Feedback  type="invalid" className="my-2 ml-5">Entrez votre pseudo SVP!</Form.Control.Feedback>
             </InputGroup>
            </Form.Group>
            <Form.Group  className="mb-5 pb-3">
             <InputGroup >
              <InputGroup.Prepend>
                 <InputGroup.Text>
                   <FaKey  className="mr-2"/>
                 </InputGroup.Text>
              </InputGroup.Prepend>
                 <Form.Control  className ="contact-input"
                    id="password" 
                    type="password" name="password" required
                    placeholder="Ecrivez votre mot de passe ici.."
                 />
                 <Form.Control.Feedback className="my-2 ml-5">Bien fait!</Form.Control.Feedback>
                 <Form.Control.Feedback  type="invalid" className="my-2 ml-5">Entrez votre mot de passe SVP!</Form.Control.Feedback>
             </InputGroup>
            </Form.Group>
            <Form.Group  className="mb-5 pb-3">
             <InputGroup >
              <InputGroup.Prepend>
                 <InputGroup.Text>
                   <FaUserShield  className="mr-2"/>
                 </InputGroup.Text>
              </InputGroup.Prepend>
                 <Form.Control  className ="contact-input"
                    id="confirm_password"
                    type="password" name="confirm-password" required
                    placeholder="Répéter votre mot de passe ici.."
                 />
                 <Form.Control.Feedback className="my-2 ml-5">Bien fait!</Form.Control.Feedback>
                 <Form.Control.Feedback  type="invalid" className="my-2 ml-5">Répéter votre mot de passe correctement SVP!</Form.Control.Feedback>
             </InputGroup>
            </Form.Group>
            <Form.Group  className="mb-5 pb-3">
               <div className="d-flex">
                 <IoMdFitness className="ml-2 mr-3 cv-icon"/>
                 <Form.Control type="file" 
                  className =""
                 />
               </div>
            </Form.Group>
            <Form.Group  className="mb-5 pb-3">
               <div className="d-flex">
                 <HiPhotograph className="ml-2 mr-3 cv-icon"/>
                 <Form.Control type="file" 
                  className =""
                 />
               </div>
            </Form.Group>
            <div className ="d-flex justify-content-center">
                <Button  className="my-auto top-btn" type="submit" variant="outline-dark" onClick = {() => changeHeight()}>
                  S'inscrire
                </Button>
             </div>
      </Form>
    </div>
)}
export default  RegisterCoachForm