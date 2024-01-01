import '../css/Navbar.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const NavBar = ({title}) => {

    return ( 

        <div className="navBar">
        <Link to="/">
        <h1>{title}</h1>
        </Link>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
     );
}
 
export default NavBar;