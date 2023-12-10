import "./NavBar.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
return (
    <nav className="NavBar">
        <ul>
            <li>Home</li>
            <li>Contacto</li>
            <li>Galeria</li>
            
           <CartWidget/>
            
        </ul>
    
    </nav>
)
}

export default NavBar

