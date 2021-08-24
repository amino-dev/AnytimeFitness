import React from 'react'
import{Form} from 'react-bootstrap'
import '../css/connexion-page/login-form.css'
const Input = (props) => {
    return (
        <div>
           <Form.Group >
               <Form.Control type={props.type} 
               placeholder={props.placeholder} 
               value={props.value} 
               onChange={props.onChange} 
               name={props.name}
               defaultValue={props.defaultValue}
               className="contact-input input-form" 
               required/>
               <Form.Text className="text-muted" >
                   {props.errorMessage}
               </Form.Text>
            </Form.Group> 
        </div>
    )
}

export default Input