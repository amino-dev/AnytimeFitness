import "../css/about-page/check.css"
import check from "../../../../img/check.png"
function CoachSportif() {
   return(
    <div className="container mt-5 pt-2">
      <h3 className="mb-5">A propos de nos coachs sportifs</h3>
      <ul>
         <li className="mb-4 d-flex"> 
             <img src={ check } className="mr-3 check-icon"/> 
             <b>Coach Sportif Diplômé</b>
         </li>
         <li className="mb-4 d-flex"> 
             <img src={ check } className="mr-3 check-icon"/> 
             <b>Détenteur d'une carte professsionelle</b>
         </li>
         <li className="mb-4 d-flex"> 
             <img src={ check } className="mr-3 check-icon"/> 
             <b>Rigoureux dans son encadrement</b>
         </li>
         <li className="mb-4 d-flex"> 
             <img src={ check } className="mr-3 check-icon"/> 
             <b>Ponctuel, flexible et assidu</b>
         </li>
         <li className="mb-4 d-flex"> 
             <img src={ check } className="mr-3 check-icon"/> 
             <b>Réactif et à l'écoute</b>
         </li>
      </ul>
    </div>
   )
}
export default CoachSportif