import NavBar from "../components/common-pages/navbar"
import Alert from "../components/common-pages/alert"
import RegisterCoachForm from "../components/register-pages/register-coach"
import Footer from "../components/common-pages/footer"



function RegisterCoach(){
 
    return(
  <div className="">
      <NavBar/>
      <Alert/>
      <RegisterCoachForm/>
      <Footer/>
    
  </div>
  )}
  export default RegisterCoach