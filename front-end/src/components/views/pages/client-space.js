import NavBar from "../components/common-pages/navbar"
import Footer from "../components/common-pages/footer"
import {useSelector} from "react"


function ClientSpace(){

    //  const auth = useSelector(state =>state.auth)
    return(
  <div className="">
      <NavBar/>
      {/* <p>{auth.user.fullName}</p> */}
      <h1 className="mt-5 pt-5">Mon espace</h1>
      <Footer/>
     
    
  </div>
  )}
  export default ClientSpace

