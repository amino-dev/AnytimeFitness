import NavBar from "../components/common-pages/navbar"
import Alert from "../components/common-pages/alert"
import RegisterUserForm from "../components/register-pages/register-user"
import Footer from "../components/common-pages/footer"


function RegisterUser(){
 
    return(
  <div className="">
      <NavBar/>
      <Alert/>
      <RegisterUserForm/>
      <Footer/>
    
  </div>
  )}
  export default RegisterUser