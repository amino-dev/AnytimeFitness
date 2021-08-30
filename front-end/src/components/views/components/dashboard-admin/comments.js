import {Table,Button} from 'react-bootstrap'
import {FaHome} from 'react-icons/fa'
import {BsFillTrashFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { deleteComment, getAllcomments } from '../../../../redux/actions/commentActions';
import {useDispatch, useSelector } from 'react-redux'
import '../css/dashboard-coach/dashboard.css'


const Comments = () => {
    const comments = useSelector(state => state.commentReducer.datas)

    //add comments
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getAllcomments())
    }, [dispatch])
    console.log("my data",comments)

     //delete a comment
     const delComment=(id)=>{
        dispatch (deleteComment(id)) 
      }

return(
<div>
<div className="container">
<div className='className="mt-4'>
   <Link to="/" className="ml-3 btn-icon"><FaHome className="dash-icon my-4"/></Link> 
</div> 
<div className="container">
             {comments.map((comment,key ) => (
            <div key={key}>
               <div className="d-flex justify-content-center mt-4">
               <Table striped bordered hover size="sm" width="100%">
                    <tbody>
                        <tr>
                            <th className="pt-3 text-center">Nom</th>
                            <td className="pt-3 text-center">{comment.fullName}</td>
                        </tr>
                        <tr>
                            <th className="pt-3 text-center">Date</th>
                            <td className="pt-3 text-center">{comment.date}</td>
                        </tr>
                        <tr>
                            <th className="pt-3 text-center">Commentaire</th>
                            <td className="pt-3 text-center">{comment.commentaire}</td>
                        </tr>            
                    </tbody>
                </Table>   
              </div>
              <div className="d-flex justify-content-center">
                    <Button className="btn-icon" ><BsFillTrashFill className="btn-icon mb-5" onClick={() => delComment(comment._id)} /></Button>
              </div>
            
            </div>
          ))
        }
        </div>
    </div>
</div>

)}
export default Comments