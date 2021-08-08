import NavBar from "../components/navbar"
import Footer from "../components/footer"
import Atouts from "../components/atouts"
import About from "../components/about"
import Offers from "../components/offer"
import Explication from "../components/explication"
import Top from "../components/top"
import "./css/home.css"


function Home(){
 
  return(
  <div className="">
    <NavBar/>
    <Top />
    <About/>
    <Atouts/>
    <Offers/>
    <Explication/>
    <Footer/>
  </div>
)}
export default Home