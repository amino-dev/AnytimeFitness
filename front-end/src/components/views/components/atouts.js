import './css/atouts.css'

const cards = [
    {title : "DISPONIBILITÉ", desc : "Nos coachs sportifs sont très disponibles et très flexibles. Nous travaillons 7j/7 de 6h du matin à 23h le soir. Vous trouverez donc votre bonheur pour la planification de vos séances de sport.", logo : "https://img.icons8.com/dotty/50/000000/calendar-2.png"},
    {title : "EXCLUSIVITÉ", desc : "Nous mettons un point d’honneur à ce que vous ayez un coach exclusif. En effet le fait d’avoir le même coach à chaque séance vous permet d’atteindre vos résultats plus rapidement.", logo : "https://img.icons8.com/ios/50/000000/diamond--v1.png"},
    {title : "RÉACTIVITÉ", desc : "Nous profitons de votre motivation pour faire démarrer au plus vite vos séances. De ce fait notre équipe est hyper réactive et vous permet de débuter votre programme en quelques heures.", logo : "https://img.icons8.com/ios-glyphs/50/000000/rocket.png"},
    {title : "ACCESSIBILITÉ", desc : "Nos coach sportifs sont recrutés rigoureusement. Ils ont également une formation de coach sportif et ont une très forte expérience dans ce domaine.En plus avec des prix pour tous.", logo : "https://img.icons8.com/ios/50/000000/handshake--v1.png"},
    {title : "RIGUEUR", desc : "La rigueur fait partie d’une de nos valeurs principales. Nous vous proposons des coachs sportifs hyper qualifiés et professionnels. Assidu, à l’écoute, rigoureux, bienvenue chez Anytime Fitness", logo :"https://img.icons8.com/ios-glyphs/50/000000/star--v1.png"},
    {title : "SÉCURITÉ", desc : "Sécurité des séances avec nos coachs diplômés détenteur d’une formation de prévention de secours & des réservations avec une plateforme qui vous permet de réserver en toute sérénité vos séances.", logo : "https://img.icons8.com/ios/50/000000/favorites-shield.png"},
    {title : "ADAPTABILITÉ", desc : "La force d’un coach sportif est de s’adapter à toutes les situations. Nous proposons donc des séances sur mesure à chacun de nos clients en prenant en compte toutes ces caractéristiques.", logo : "https://img.icons8.com/ios/50/000000/purposeful-woman.png"},
    {title : "MOBILITÉ", desc : "Nous sommes disponible dans toute la Tunisie. Vous avez forcément un de nos coachs qui réside à côté de chez vous. Alors pourquoi ne pas  faire du sport avec le meilleur coach sportif de votre ville ?", logo : "https://img.icons8.com/glyph-neue/50/000000/cycling-road.png"}
]

function Atout(props){
    return(
        <div className="text-center mx-3 mb-5">
            <img  src={props.logo} alt="atout-logo" className="mb-4"/>
            <h3  className="mb-3">{props.title}</h3>
            <hr className="mb-4 d-block mx-auto"></hr>
            <p className="mb-4 desc">{props.desc}</p>  
    </div> 
    )
 }
 
 function Atouts() {
    return(
     <div className="container mb-5">
       <h2 className="text-center mb-4">👊 NOS ATOUTS, NOTRE FORCE 👊</h2>
       <p className="text-center mb-5 pb-3"><b>Anytime Fitness</b> vous propose un service personnalisé et clé en main dont voici les 8 points forts principaux.</p>
       <div className="cards">
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