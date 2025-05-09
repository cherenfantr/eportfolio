import { Link } from "react-router-dom";
 function NavBar() {
    return(
        <nav>
            <ul>
                <li><link to="/"> Acceuil </link></li>
                <li><link to="/interet"> Mes Intérêts </link></li>
                <li><link to="/ajout-du-projet"> Ajouter un projet </link></li>
            </ul>
        </nav>
    )
 }
 
 export default NavBar