 import "../css/about-page/check.css"
 import check from "../../../../img/check.png"
 function AnytimeFtiness() {
    return(
     <div className="container mt-5 pt-2">
       <h3 className="mb-5">A propos de Anytime Fitness</h3>
       <ul>
         <li className="mb-4 d-flex"> 
             <img src={ check } className="mr-3 check-icon"/> 
             <b>Une équipe de coachs sportif recrutés avec une grande rigueur</b>
         </li>
         <li className="mb-4 d-flex"> 
             <img src={ check } className="mr-3 check-icon"/> 
             <b>Une grande expérience dans le domaine du coaching sportif</b>
         </li>
         <li className="mb-4 d-flex"> 
             <img src={ check } className="mr-3 check-icon"/> 
             <b>Une société en plein développement et en forte croissance</b>
         </li>
         <li className="mb-4 d-flex"> 
             <img src={ check } className="mr-3 check-icon"/> 
             <b>Un large panel de prestations sportives disponibles</b>
         </li>
         <li className="mb-4 d-flex"> 
             <img src={ check } className="mr-3 check-icon"/> 
             <b>Un service client réactif et opérationnel</b>
         </li>
       </ul>
     </div>
    )
 }
 export default AnytimeFtiness