import './css/atouts.css'
const cards = [
    {title : "DISPONIBILITÉ", desc : "Nos coachs sportifs sont très disponibles et très flexibles. Nous travaillons 7j/7 de 6 heure du matin à 23 heure le soir. Vous trouverez donc votre bonheur pour la planification de vos séances de sport.", logo : "https://img.icons8.com/dotty/50/000000/calendar-2.png"},
    {title : "EXCLUSIVITÉ", desc : "Nous mettons un point d’honneur à ce que vous ayez un coach exclusif. En effet le fait d’avoir le même coach à chaque séance vous permet d’atteindre vos résultats plus rapidement.", logo : "https://img.icons8.com/ios/50/000000/diamond--v1.png"},
    {title : "RÉACTIVITÉ", desc : "Nous profitons de votre motivation pour faire démarrer au plus vite vos séances. De ce fait notre équipe est hyper réactive et vous permet de débuter votre programme en quelques heures.", logo : "https://img.icons8.com/ios-glyphs/50/000000/rocket.png"},
    {title : "ACCESSIBILITÉ", desc : "Nos coach sportifs sont recrutés rigoureusement. Les 2 gérants de Just Coaching, Michaël & Romain ont également une formation de coach sportif et ont une très forte expérience dans ce domaine.", logo : "https://img.icons8.com/ios/50/000000/handshake--v1.png"}
]

function Atout(props){
    return(
        <div className="mr-4 text-center">
            <img src={props.logo}/>
            <h2 >{props.title}</h2>
            <p>{props.desc}</p>
       
        
    </div>
     
    )
 }
 
 function Atouts() {
    return(
     <div className="container mb-5">
        <h3 className="mt-5 mb-3"></h3>
       <div className="d-flex">
          {cards.map(element =>
            <div>
               <Atout title = {element.title} desc = {element.desc} logo = {element.logo}/>     
            </div>
          )}
       </div>
     </div>
    )
 }
 export default Atouts