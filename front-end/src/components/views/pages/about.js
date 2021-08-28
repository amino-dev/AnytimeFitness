import NavBar from "../components/common-pages/navbar"
import Footer from "../components/common-pages/footer"
import Top from "../components/common-pages/top"
import Objectif from "../components/about-page/objectif"
import Coachs from "../components//about-page/coachs"
import Check from "../components//about-page/check"
import TopButton from "../components/coach-page/top-button"

function About(){
 
    return(
  <div className="">
      <NavBar/>
      <Top/>
      <TopButton/>
      <Objectif/>
      <Coachs/>
      <Check/>
      <Footer/>
     
    
  </div>
  )}
  export default About