import { Link } from "react-router-dom";
import "./NavBar.css"
import logo from "../assets/logo.png"
 function NavBar() {
    return(
        <nav className="navbar">
            <div className="nav-container"> 
                <Link to="/" className="logo-link">
                    <img src={logo} alt="logo" className="logo" />
                </Link>
                <ul className=".nav__links">
                    <li><Link to="/"> Acceuil </Link></li>
                    <li><Link to="/interet"> Anime Latest </Link></li>
                    <li><Link to="/ajout-du-projet"> Projects </Link></li>
                </ul>
            </div>
        </nav>
    )
 }
 
 export default NavBar