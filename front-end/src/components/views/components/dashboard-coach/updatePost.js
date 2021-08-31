import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';
import {updatePost} from "../../../../redux/actions/postActions"
import {useDispatch} from 'react-redux'
import {FaPencilAlt} from 'react-icons/fa'

const UpdatePost = ({el,id}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const [update,setUpdate]=useState({photo:el.photo,speciality:el.speciality,description:el.description,soloprice:el.soloprice,duoprice:el.duoprice,trioprice:el.trioprice,quatuorprice:el.quatuorprice,transportprice:el.transportprice,place:el.place,
    courses:el.courses,level:el.level,adress:el.adress,mobility:el.mobility,experience1:el.experience1,experience2:el.experience2,experience3:el.experience3,experience4:el.experience4,
    certification1:el.certification1,certification2:el.certification2,certification3:el.certification3,certification4:el.certification4,method:el.method})
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

    const Updatepost=()=>{
        dispatch (updatePost(id, 
            update.photo,
            update.speciality,
            update.description,
            update.soloprice,
            update.duoprice,
            update.trioprice,
            update.quatuorprice,
            update.transportprice,
            update.place,
            update.courses,
            update.level,
            update.adress,
            update.mobility,
            update.experience1,
            update.experience2,
            update.experience3,
            update.experience4,
            update.certification1,
            update.certification2,
            update.certification3,
            update.certification4,
            update.method)) 
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
              <Modal.Title>Modifier une publication</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                     <Form.Control type="url" name="photo"
                      defaultValue={el.photo} 
                     onChange={handleChange}
                     className ="contact-input"
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="speciality"
                     defaultValue={el.speciality}
                     onChange={handleChange}
                     className ="contact-input"
                      />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control  as="textarea" rows={5}  cols={40} type="text" name="description" 
                     onChange={handleChange}
                     defaultValue={el.description}
                     className ="contact-input"
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="number" name="soloprice" 
                     onChange={handleChange}
                     defaultValue={el.soloprice}
                     className ="contact-input"
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="number" name="duoprice" 
                     onChange={handleChange}
                     defaultValue={el.duoprice}
                     className ="contact-input"
                      />   
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="number" name="trioprice" 
                     onChange={handleChange}
                     defaultValue={el.trioprice}
                     className ="contact-input"
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="number" name="quatuorprice" 
                     onChange={handleChange}
                     defaultValue={el.quatuorprice}
                     className ="contact-input"
                      />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="number" name="transportprice" 
                     onChange={handleChange}
                     defaultValue={el.transportprice}
                     className ="contact-input"
                      />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="courses" 
                     onChange={handleChange}
                     defaultValue={el.courses}
                     className ="contact-input"
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="place" 
                     onChange={handleChange}
                     defaultValue={el.place}
                     className ="contact-input"
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="level" 
                     className ="contact-input"
                     onChange={handleChange}
                     defaultValue={el.level}
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="adress" 
                     onChange={handleChange}
                     defaultValue={el.adress}
                     className ="contact-input" 
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="mobility" 
                     onChange={handleChange}
                     className ="contact-input"
                     defaultValue={el.mobility}
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text"  name="experience1" 
                     onChange={handleChange}
                     defaultValue={el.experience1}
                     className ="contact-input"
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text"  name="experience2" 
                     onChange={handleChange}
                     defaultValue={el.experience2}
                     className ="contact-input"
                      />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text"  name="experience3" 
                     onChange={handleChange}
                     defaultValue={el.experience3}
                     className ="contact-input"
                      />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="experience4" 
                     onChange={handleChange}
                     defaultValue={el.experience4}
                     className ="contact-input"
                      />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="certification1" 
                     onChange={handleChange}
                     defaultValue={el.certification1}
                     className ="contact-input"
                      />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text"  name="certification2" 
                     onChange={handleChange}
                     defaultValue={el.certification2}
                     className ="contact-input"
                      />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text"  name="certification3" 
                     onChange={handleChange}
                     defaultValue={el.certification3}
                     className ="contact-input"
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text"  name="certification4" 
                     onChange={handleChange}
                     defaultValue={el.certification4}
                     className ="contact-input"
                      />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text"  as="textarea" rows={5}  cols={40} name="method" 
                     onChange={handleChange}
                     defaultValue={el.method}
                     className ="contact-input"
                      />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" type="submit" onClick={Updatepost} className="top-btn">Modifier</Button>
            </Modal.Footer>
          </Modal>
</div>
</div>
   )

 }

export default UpdatePost