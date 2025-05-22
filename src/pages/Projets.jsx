 import { useState } from "react"
import NavBar from "../components/NavBar"
 import "./Projets.css"
import blogimg from "../assets/blogimg.png"
import todolistimg from "../assets/todolistimg.png"
import memeimg from "../assets/memegenimg.png"
function Projects() {
    const projet = [
        {
            titre:"Blog personnel",
            description:"Une page web avec une liste de cartes chaque carte representait ce que la personne aimais comme series ou film on utilisait des props pour passer les données accompagner d'un tableau d'objet data.js",
            technologies: {
                langage:["Javascript"],
                logiciel:["Vs code"],
                framework:["React"],
            },
            image:blogimg,
            lien: "https://github.com/420-211-Applications-Web-H25/420-211-6245879/tree/TP1",
        },
                {
            titre:"Gestionnaire de taches",
            description:"Une application web permettant de créer, modifier et supprimer des tâches dans une interface intuitive.",
            technologies: {
                langage:["Javascript"],
                logiciel:["Vs code"],
                framework:["React"],
            },
            image:todolistimg,
            lien: "https://github.com/420-211-Applications-Web-H25/420-211-6245879/tree/TP1",
        },
                {
            titre:"Generateur de meme",
            description:"Un générateur de memes qui permet aux utilisateurs de choisir une image et d'ajouter du texte pour créer des memes personnalisés",
            technologies: {
                langage:["Javascript"],
                logiciel:["Vs code"],
                framework:["React"],
            },
            image:memeimg,
            lien:"https://github.com/420-211-Applications-Web-H25/420-211-6245879/tree/TP3",
        },

    ]
    
    return(
        <div className="page-projet">
            <NavBar/>
            <h1>Page de Projects</h1>
            <div className="grille-projet">
                {projet.map((projet,index) => (
                    <div key={index} className="project-card">
                    <img src={projet.image} alt={projet.titre} />
                    <h2>{projet.titre}</h2>
                    <p>{projet.description}</p>
                
                    <div className="Technologie">
                        <p><strong>Langage:</strong>{projet.technologies.langage.map((language,i)=>( <span key={i}>{language} </span>
                            ))
                            }
                        </p>
                    
                        <p>
                            <strong>Logiciel:</strong>{projet.technologies.logiciel.map((soft,i)=>( <span key={i}>{soft} </span>
                            ))
                            }
                        </p>

                        <p><strong>Framework</strong>{projet.technologies.framework.map((frame,i)=>( <span key={i}>{frame} </span>
                            ))
                            }
                        </p>

            </div>

            <div>
            <a href={projet.lien} target="_blank">voir le code</a>
            </div>
            </div>
            ))}
            </div>
        </div>
    )
}
export default Projects