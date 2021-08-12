import '../css/register-pages/register-user.css'
import { Button, Form, Row, InputGroup} from "react-bootstrap"
import { FaUserAlt, FaMapMarkerAlt, FaPhoneAlt, FaTransgender, FaKey, FaUserShield } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import { RiFolderUserFill } from "react-icons/ri"
import { useState } from "react"


function RegisterUserForm(){
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
       document.getElementById("user-form").style.height = "1190px";
 }
  return(
    <div className="">
       <h2 className="text-center my-5 pt-4">INSCRIPTION</h2>  
       <Form className="form register-user-form" noValidate validated={validated} onSubmit={handleSubmit} id="user-form">
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
                    type="text" name="password" required
                    placeholder="Ecrivez votre mot de passe ici.."/>
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
                    type="text" name="repeat-password" required
                    placeholder="Ecrivez votre mot de passe ici.."/>
                    <Form.Control.Feedback className="my-2 ml-5">Bien fait!</Form.Control.Feedback>
                    <Form.Control.Feedback  type="invalid" className="my-2 ml-5">Répéter votre mot de passe correctement SVP!</Form.Control.Feedback>
             </InputGroup>
            </Form.Group>
            <div className ="d-flex justify-content-center">
                <Button  className="my-auto top-btn" type="submit" variant="outline-dark" onClick = {() => changeHeight()}>
                  S'inscrire
                </Button>
             </div>
      </Form>
    </div>
)}
export default  RegisterUserForm