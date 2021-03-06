import '../css/connexion-page/login-form.css'
import React,{useState} from 'react'
import { Container,Row,Form, Button } from 'react-bootstrap'
import Input from './input'
import {CoachLogin} from '../../../../redux/actions/coachAuthActions'
import {useDispatch,useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { FaKey } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import { Link } from "react-router-dom"

const LoginForm = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  
const coachAuth = useSelector(state =>state.coachAuth)
const Coachlogin =(e)=>{
  e.preventDefault()
  const user = {
      email,
      password
  }
  dispatch(CoachLogin(user))
}

if(coachAuth.authenticate){
  return <Redirect to={`/`} />
}

  return (
      <div>
          <h2 className="text-center mt-5 pt-4 connextion-title">CONNEXION</h2>    
          <Container>
              <Row>
                      <Form className="form login-form mb-5" onSubmit={Coachlogin}>
                          <div className="d-flex mb-3">
                            <GrMail  className="mr-2 mt-2 logo-login"/>
                            <Input  placeholder="Ecrivez votre email ici.." type="email"  onChange={(e)=>{setEmail(e.target.value)}}/>
                          </div>
                          <div className="d-flex">
                            <FaKey  className="mr-2 mt-2 logo-login"/>
                            <Input  placeholder="Ecrivez votre mot de passe ici.." type="password" onChange={(e)=>{setPassword(e.target.value)}} />
                          </div>
                          <div className="d-flex justify-content-center">
                             <Button  className="my-auto top-btn mt-4" type="submit" variant="outline-dark">Se connecter</Button>
                          </div>
                          <div className="d-flex justify-content-center mt-5">
                             <h6 className="mr-5">Pas de compte?</h6>
                              <Link className="inscri-link" to="/anytimeFitness/inscri-coach"><h6>Cr??er un compte</h6></Link>
                          </div>  
                      </Form>
              </Row>
          </Container>
      </div>
  )
}

export default LoginForm
