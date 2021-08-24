import NavBar from "../components/common-pages/navbar"
import Alert from "../components/common-pages/alert"
import AdminLoginForm from "../components/connection-page/admin-login-form"
import Footer from "../components/common-pages/footer"


function AdminConnection(){
 
    return(
  <div className="">
      <NavBar/>
      <Alert/>
      <AdminLoginForm/>
      <Footer/>
    
  </div>
  )}
  export default AdminConnection