import {Modal, Button, Form} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addNewPost} from "../../../../redux/actions/postActions"
import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom';


const AddPost= () => {

const [input,setInput]=useState({
            name: "",
            lastname:"",
            photo:"",
            speciality:"",
            description:"",
            soloprice:"",
            duoprice:"",
            trioprice:"",
            quatuorprice:"",
            transportprice:"",
            place:"",
            courses:"",
            level:"",
            adress:"",
            mobility:"",
            experience1:"",
            experience2:"",
            experience3:"",
            experience4:"",
            certification1:"",
            certification2:"",
            certification3:"",
            certification4:"",
            method:""})
  
const handleChange=(e)=>{
    const {name,value}=e.target
    setInput({
        ...input,
        [name]:value
    })
    console.log("input",input)
}

const coachAuth = useSelector((state) => state.coachAuth)

const addPost=()=>{
  dispatch (addNewPost(coachAuth.user.name,coachAuth.user.lastname,input.photo,input.speciality ,input.description, input.soloprice, input.duoprice,
    input.trioprice, input.quatuorprice, input.transportprice,input.place,input.courses,input.level,
    input.adress,input.mobility,input.experience1,input.certification1,input.experience2,input.certification2,input.experience3,input.certification3,input.experience4,input.certification4,input.method)) 
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
      <div className="">
        <Link to="/" className="ml-3 btn-icon"><FaHome className="dash-icon my-4"/></Link> 
        <div className="ml-3 mt-3">
            <Button  variant="primary" className="top-btn" id="postButton" onClick={handleShow}>
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
              {/* <Form.Group className="mb-3">
                     <Form.Control type="string" name="name"
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez votre prénom ...!" 
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="string" name="lastname"
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez votre nom de famille ...!" 
                     />
                </Form.Group> */}
                <Form.Group className="mb-3">
                     <Form.Control type="url" name="photo"
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez le lien de votre photo ici ...!" 
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="speciality"
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez votre spécialité ici ...!" 
                      />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control  as="textarea" rows={5}  cols={40} type="text" name="description" 
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez votre description ici ...!" 
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="number" name="soloprice" 
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez votre prix solo ici ...!"   
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="number" name="duoprice" 
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez votre prix duo ici ...!" 
                      />   
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="number" name="trioprice" 
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez votre prix trio ici ...!" 
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="number" name="quatuorprice" 
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez votre prix quatuor ici ...!" 
                      />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="number" name="transportprice" 
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez votre prix de transport ici ...!"  
                      />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="courses" 
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez vos cours ...!"  
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="place" 
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez la place...!"  
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="level" 
                     className ="contact-input"
                     onChange={handleChange}
                     placeholder="SVP entrez les niveaux de vos cours ...!"  
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="adress" 
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez votre adresse compléte ...!"   
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="mobility" 
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez votre mobilité ...!"
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text"  name="experience1" 
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez votre dérniere expérience ...!"
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text"  name="experience2" 
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez votre expérience ...!"
                     
                      />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text"  name="experience3" 
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez votre expérience ...!"
                      />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="experience4" 
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez votre expérience ...!"
                      />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="certification1" 
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez votre derniére certification ...!"
                      />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text"  name="certification2" 
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez votre certification ...!"
                      />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text"  name="certification3" 
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez votre certification ...!"
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text"  name="certification4" 
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez votre certification ...!"
                      />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text"  as="textarea" rows={5}  cols={40} name="method" 
                     onChange={handleChange}
                     className ="contact-input"
                     placeholder="SVP entrez votre méthode de coaching ...!"
                      />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" type="submit"  className="top-btn"  onClick={ () => {addPost(); hideButton()}}>Publier</Button>
            </Modal.Footer>
          </Modal>
        </div>

      </div>
       
      );
    }
    
  export default AddPost