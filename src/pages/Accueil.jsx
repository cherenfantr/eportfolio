import NavBar from "../components/NavBar"
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Accueil.css"
function Accueil(){
return(
<div className="acceuil">
    <NavBar/>
    <Header/>
    
        <p className="presentation"> 
            Je m'appelle Ralph, jeune apprenti en technique de l'informatique.
            passionné par les animé et les jeux vidéo.
        </p>


        <section className="parcours-scolaire">
        <h2>Mon parcours scolaire 🎓</h2>
            <ul>
                <li><strong>2023 - Aujourd'hui :</strong> Techniques de l'informatique — Cégep de Marie Victorin</li>
                <li><strong>2021 - 2023 :</strong> Diplôme d'études secondaires — École secondaire Montreal Nord</li>
                <li><strong>2018 - 2021 :</strong> Parcours enrichi en sciences et technologie — École secondaire Montreal Est</li>
            </ul>
        </section>


        <section className="fun-facts">
          <h2>Quelques faits amusants :</h2>
            <ul>
                    <li>👾 Mon anime préféré est <strong>Jujutsu Kaisen</strong>.</li>
                    <li>💻 J’ai récemment appris à utiliser une API en React.</li>
                    <li>🎮 Je passe beaucoup de temps sur les jeux de shooter.</li>
                    <li>☕ Le matcha est la meilleur boisson au monde.</li>
            </ul>
        </section>
</div>
)
}
export default Accueil