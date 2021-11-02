import { Link } from 'react-router-dom'
import logo from '../img/logo.svg'


const Navbar = () => {
    return (
        <nav>
            <Link className="nav-logo" to="/">
                <img src={logo} alt="" />
            </Link>
            <div className="nav-links-container" id="nav-mobile">
                <Link className="nav-link" to="/">ABOUT</Link>
                <Link className="nav-link" to="/designs">DESIGNS</Link>
                <a className="nav-link" href="../pages/Designs.js">GALLERY</a>
                <a className="nav-link" href="/">FAQ</a>
                <a className="nav-link" href="/">CONTACT</a>
            </div>
        </nav>
    )
}

export default Navbar
