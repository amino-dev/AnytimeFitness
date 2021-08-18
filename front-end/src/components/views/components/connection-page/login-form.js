// import '../css/connexion-page/login-form.css'
// import { Button, Form,  InputGroup } from "react-bootstrap"
// import { FaKey } from "react-icons/fa"
// import { GrMail } from "react-icons/gr"
// import { Link } from "react-router-dom"
// import { useState } from "react"

// function LoginForm(){
  
//  const [validated, setValidated] = useState(false);
 
//  const handleSubmit = (event) => {
//  const form = event.currentTarget;
//      if (form.checkValidity() === false) {
//          event.preventDefault();
//          event.stopPropagation();
//      }
//        setValidated(true);
//  }

//  function changeHeight() {
//   document.getElementById("login").style.height = "370px";
//  }

//   return(
//     <div className="">
//        <h2 className="text-center mt-5 pt-4 connextion-title">CONNEXION</h2>    
//        <Form className="form login-form mb-5" noValidate validated={validated} onSubmit={handleSubmit} id="login">
//             <Form.Group  className="mb-5 pb-3">
//              <InputGroup >
//               <InputGroup.Prepend>
//                  <InputGroup.Text>
//                    <GrMail  className="mr-2"/>
//                  </InputGroup.Text>
//               </InputGroup.Prepend>
//                  <Form.Control  className ="contact-input"
//                     type="email" name="email" required
//                     placeholder="Ecrivez votre email ici.."/>
//                     <Form.Control.Feedback className="my-2 ml-5">Bien fait!</Form.Control.Feedback>
//                     <Form.Control.Feedback  type="invalid" className="my-2 ml-5">Entrez votre mail correctement SVP!</Form.Control.Feedback>
//              </InputGroup>
//             </Form.Group>
//             <Form.Group  className="mb-5 pb-3">
//              <InputGroup >
//               <InputGroup.Prepend>
//                  <InputGroup.Text>
//                    <FaKey  className="mr-2"/>
//                  </InputGroup.Text>
//               </InputGroup.Prepend>
//                  <Form.Control  className ="contact-input"
//                     type="text" name="password" required
//                     placeholder="Ecrivez votre mot de passe ici.."/>
//                     <Form.Control.Feedback className="my-2 ml-5">Bien fait!</Form.Control.Feedback>
//                     <Form.Control.Feedback  type="invalid" className="my-2 ml-5">Entrez votre mot de passe correctement SVP!</Form.Control.Feedback>
//              </InputGroup>
//             </Form.Group>
//              <div className ="d-flex justify-content-center">
//                 <Button  className="my-auto top-btn" type="submit" variant="outline-dark" onClick = {() => changeHeight()}>
//                   Se connecter
//                 </Button>
//              </div>
//         </Form>
        // <div className="container mt-5 pt-5"> 
        //     <h4 className="mb-5 ml-3">Créer un compte ?</h4>
        //     <ul>
        //         <li className="inscription-list">
        //             Si vous n'avez pas de <b>compte client</b>, vous serez invité à en créer un compte en cliquant  <Link className="inscri-link" to="/anytimeFitness/inscri-utilisateur"><b>ici</b></Link>.
        //         </li>
        //         <li className="inscription-list">
        //             Si vous êtes <b>coach</b> et vous souhaitez travailler avec nous, vous devez d'abord nous faire parvenir un CV complet par en cliquant <Link className="inscri-link" to="/anytimeFitness/inscri-coach"><b>ici</b></Link>.
        //         </li>
        //     </ul>

        // </div>
//     </div>
// )}
// export default  LoginForm

import '../css/connexion-page/login-form.css'
import React,{useState} from 'react'
import { Container,Row,Form, Button } from 'react-bootstrap'
import Input from './input'
import {login} from '../../../../redux/actions/userAuthActions'
import {useDispatch,useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { FaKey } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import { Link } from "react-router-dom"

const LoginForm = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const auth = useSelector(state =>state.auth)
  const dispatch = useDispatch()
  
  const userLogin =(e)=>{
  e.preventDefault()
  const user = {
      email,
      password
  }
  dispatch(login(user))

}

if(auth.authenticate){
  return <Redirect to={`/`} />
}

  return (
      <div>
          <h2 className="text-center mt-5 pt-4 connextion-title">CONNEXION</h2>    
          <Container>
              <Row>
                      <Form className="form login-form mb-5" onSubmit={userLogin}>
                          <div className="d-flex mb-3">
                            <GrMail  className="mr-2 mt-2 logo-login"/>
                            <Input  placeholder="Ecrivez votre email ici.." type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                          </div>
                          <div className="d-flex">
                            <FaKey  className="mr-2 mt-2 logo-login"/>
                            <Input  placeholder="Ecrivez votre mot de passe ici.."  type="password" onChange={(e)=>{setPassword(e.target.value)}} />
                          </div>
                          <div className="d-flex justify-content-center">
                             <Button  className="my-auto top-btn mt-4" type="submit" variant="outline-dark">Se connecter</Button>
                          </div>
                      </Form>
              </Row>
          </Container>
          <div className="container mt-5 pt-5"> 
            <h4 className="mb-5 ml-3">Créer un compte ?</h4>
            <ul>
                <li className="inscription-list">
                    Si vous n'avez pas de <b>compte client</b>, vous serez invité à en créer un compte en cliquant  <Link className="inscri-link" to="/anytimeFitness/inscri-utilisateur"><b>ici</b></Link>.
                </li>
            </ul>

        </div>
          
      </div>
  )
}

export default LoginForm


