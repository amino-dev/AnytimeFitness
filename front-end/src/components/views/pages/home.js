import NavBar from "../components/common-pages/navbar"
import Footer from "../components/common-pages/footer"
import Atouts from "../components/home-page/atouts"
import About from "../components//home-page/about"
import Offers from "../components//home-page/offer"
import Explication from "../components/home-page/explication"
import Top from "../components/common-pages/top"
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