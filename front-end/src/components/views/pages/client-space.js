import NavBar from "../components/common-pages/navbar"
import Footer from "../components/common-pages/footer"
import Profile from "../components/client-space/clientSpace"
import {useSelector} from "react"


function ClientSpace(){

    //  const auth = useSelector(state =>state.auth)
    return(
  <div className="">
      <NavBar/>
      <Profile/>
      <Footer/>
     
    
  </div>
  )}
  export default ClientSpace

