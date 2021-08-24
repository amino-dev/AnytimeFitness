import {Modal, Button, Form} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addNewPost} from "../../../../redux/actions/postActions"
import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom';


const AddPost= () => {
    
const [input,setInput]=useState({
            userId:"",
            photo:"",
            speciality:"",
            description:"",
            soloprice:"",
            duoprice:"",
            trioprice:"",
            quatuorprice:"",
            transportprice:"",
            time:"",
            coursetype:"",
            place:"",
            courses:"",
            level:"",
            adress:"",
            mobility:"",
            experience:"",
            certifications:"",
            method:""})
  
const handleChange=(e)=>{
    const {name,value}=e.target
    setInput({
        ...input,
        [name]:value
    })
    console.log("input",input)
}

const addPost=()=>{
  dispatch (addNewPost(input.userId, input.photo,input.speciality ,input.description, input.soloprice, input.duoprice,
    input.trioprice, input.quatuorprice, input.transportprice,input.time,input.coursetype,input.place,input.courses,input.level,
    input.adress,input.mobility,input.experience,input.certifications,input.method)) 
  console.log("inpuuuuuuuuuuuut",input)
  setShow(false)
  }
  const dispatch = useDispatch()

  const hideButton=() =>{
     var x = document.getElementById("postButton");
     if (x.style.display === "none") {
       x.style.display = "block";
     } else {
       x.style.display = "none";
     }
   }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <div className="mt-4">
        <Link to="/" className="ml-3 btn-icon"><FaHome className="dash-icon my-4"/></Link> 
        <div className="ml-3 mt-3">
          <Button variant="primary" id="postButton" onClick={handleShow}>
            Publier
          </Button>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Ajouter une publication</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="userId" 
                     onChange={handleChange}
                     placeholder="SVP entrez votre ID ici ...!"
                     required/>
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="url" name="photo"
                     onChange={handleChange}
                     placeholder="SVP entrez le lien de votre photo ici ...!" 
                     required/>
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="speciality"
                     onChange={handleChange}
                     placeholder="SVP entrez votre spécialité ici ...!" 
                     required />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control  as="textarea" rows={5}  cols={40} type="text" name="description" 
                      onChange={handleChange}
                     placeholder="SVP entrez votre description ici ...!" 
                     required/>
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="number" name="soloprice" 
                      onChange={handleChange}
                     placeholder="SVP entrez votre prix solo ici ...!" 
                     required/>
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="number" name="duoprice" 
                      onChange={handleChange}
                     placeholder="SVP entrez votre prix duo ici ...!" />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="number" name="trioprice" 
                      onChange={handleChange}
                     placeholder="SVP entrez votre prix trio ici ...!" 
                     required/>
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="number" name="quatuorprice" 
                      onChange={handleChange}
                     placeholder="SVP entrez votre prix quatuor ici ...!"
                     required />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="number" name="transportprice" 
                      onChange={handleChange}
                     placeholder="SVP entrez votre prix de transport ici ...!" 
                     required/>
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="number" name="time" 
                      onChange={handleChange}
                     placeholder="SVP entrez votre temps de réponse ici ...!"
                     required />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="coursetype" 
                      onChange={handleChange}
                     placeholder="SVP entrez le types de vos cours ...!"
                     required />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="coursetype" 
                      onChange={handleChange}
                     placeholder="SVP entrez le types de vos cours ...!"
                     required />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="place" 
                      onChange={handleChange}
                     placeholder="SVP entrez les places de vos cours ...!"
                     required />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="courses" 
                      onChange={handleChange}
                     placeholder="SVP entrez vos cours ...!" 
                     required/>
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="level" 
                      onChange={handleChange}
                     placeholder="SVP entrez les niveaux de vos cours ...!" 
                     required/>
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="adress" 
                      onChange={handleChange}
                     placeholder="SVP entrez votre adresse compléte ...!" 
                     required/>
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="mobility" 
                      onChange={handleChange}
                     placeholder="SVP entrez votre mobilité ...!"
                     required />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" as="textarea" rows={5}  cols={40} name="experience" 
                      onChange={handleChange}
                     placeholder="SVP entrez votre expérience ...!"
                     required />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text"  as="textarea" rows={5}  cols={40} name="certifications" 
                      onChange={handleChange}
                     placeholder="SVP entrez vos certifications ...!"
                     required />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text"  as="textarea" rows={5}  cols={40} name="method" 
                      onChange={handleChange}
                     placeholder="SVP entrez votre méthode de coaching ...!"
                     required />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit"  onClick={ () => {addPost(); hideButton()}}>Post</Button>
            </Modal.Footer>
          </Modal>
        </div>

      </div>
       
      );
    }
    
  export default AddPost