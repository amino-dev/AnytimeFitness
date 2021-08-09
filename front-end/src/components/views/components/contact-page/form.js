import '../css/contact-page/form.css'
import { Button, Form } from "react-bootstrap"
import { FaUserAlt, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import { SiGooglemessages } from "react-icons/si"
import { BiSend } from "react-icons/bi"

// import { AiTwotonePhone } from "react-icons/ai"


function ContactForm(){
  return(
  <div className="">
       <h2 className="text-center my-5 pt-4">CONTACTEZ-NOUS</h2>
       <div className="text-center mb-5">
             <p>Une question ? Besoin d'aide ou d'informations ?</p>
             <p>Nous sommes à votre écoute. N'hésitez pas à nous contacter !</p>
             <p>🎁 Si vous souhaitez offrir un bon cadeau, pensez à le préciser afin que nous puissions vous l'envoyer.</p>
       </div>      
       <Form className="contact-form">
            <Form.Group className="mb-3" controlId="formBasicName">
                   <div className="d-flex">
                         <FaUserAlt className="mt-2 mr-2 contact-icons"/>
                         <Form.Control  className ="contact-input" required  type="text" name="name" placeholder="Ecrivez votre prénom ici.." />
                   </div>    
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicLastName">
                   <div className="d-flex">
                         <FaUserAlt className="mt-2 mr-2 contact-icons"/>
                         <Form.Control  className ="contact-input" required type="text" name="lastname" placeholder="Ecrivez votre nom ici.." />
                   </div>    
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicCity">
                   <div className="d-flex">
                         <FaMapMarkerAlt className="mt-2 mr-2 contact-icons"/>
                         <Form.Control  className ="contact-input" required type="text" name="city" placeholder="Ecrivez votre ville ici.." />
                   </div>    
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicEmail">
                   <div className="d-flex">
                         <GrMail className="mt-2 mr-2 contact-icons"/>
                         <Form.Control  className ="contact-input" required type="email" name="email" placeholder="Ecrivez votre email ici.."/>
                   </div>    
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicTel">
                   <div className="d-flex">
                         <FaPhoneAlt className="mt-2 mr-2 contact-icons"/>
                         <Form.Control  className ="contact-input" required type="number" name="tel" placeholder="Ecrivez votre numéro de téléphone ici.." />
                   </div>    
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicMessage">
                   <div className="d-flex">
                         <SiGooglemessages className="mt-3 mr-2 contact-icons"/>
                         <Form.Control   as="textarea"  rows={5}  cols={40} required className ="contact-input" type="text" name="message" placeholder="Ecrivez votre mesage ici.." />
                   </div>    
             </Form.Group>
             <Button  className="my-auto contact-button" variant="outline-dark" >
                  <BiSend />
             </Button>
      </Form>
       {/* <form class="form">
           <div className="d-flex ">
                <FaUserAlt className="mt-3 contact-icons"/>
                <input class="input" type="text" placeholder="Ecrivez votre prénom ici.."></input>
           </div>
           <div className="d-flex ">
                <FaUserAlt className="mt-3 contact-icons"/>
                <input class="input" type="text" placeholder="Ecrivez votre nom ici.."></input>
           </div>
           <div className="d-flex ">
                <FaMapMarkerAlt className="mt-3 contact-icons"/>
                <input class="input" type="text" placeholder="Ecrivez votre ville ici.."></input>
           </div>
           <div className="d-flex ">
                <GrMail className="mt-3 contact-icons"/>
                <input class="input" type="email" placeholder="Ecrivez votre email ici.."></input>
           </div>
           <div className="d-flex ">
                <FaPhoneAlt className="mt-3 contact-icons"/>
                <input class="input" type="number" placeholder="Ecrivez votre téléphone ici.."></input>
           </div>
           <div className="d-flex ">
                <SiGooglemessages className="mt-3 contact-icons"/>
                <textarea class="textarea"   type="text"  rows="5" cols="40" class="input" placeholder="Ecrivez votre message ici.."></textarea>
           </div>
           <button class="button" >Envoyer</button>
        </form> */}
    </div>
)}
export default  ContactForm