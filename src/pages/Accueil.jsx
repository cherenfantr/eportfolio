import NavBar from "../components/NavBar"
import "./Accueil.css"
function Accueil(){
return(
<div className="acceuil">
    <NavBar/>
    <h1>Bienvenu sur mon eportfolio !</h1>
    <p className="presentation"> 
        Je m'appelle Ralph, jeune apprenti en technique de l'informatique.
        passionné par les animé et les jeux vidéo.
    </p>

</div>
)
}
export default Accueil