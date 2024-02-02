import { Link } from "react-router-dom";
import style from "./navbar.module.css"
export default function Navbar() {
    return (    
        <nav className={style.navbar}>
            <div className={style.navbar__image}>
            <img src="./../../public/images/logo_dixa.jpg" alt="Logo" />
            </div>
            <ul className={style.navbar__options}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>

        </nav>
    )
}