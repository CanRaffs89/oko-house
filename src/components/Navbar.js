import { Link } from 'react-router-dom'
import logo from '../img/logo.svg'
import { useState } from 'react'


const Navbar = () => {
    const [menu, setMenu] = useState(false)

    const showMenu = () => setMenu(!menu)

    return (
        <>
        <input type="checkbox" id="nav" className="hidden"/>
            <label htmlFor="nav" className="nav-mobile-toggle" onClick={showMenu}>
                <i></i>
                <i></i>
                <i></i>
            </label> 
        <nav>
            <Link className="nav-logo" to="/">
                <img src={logo} alt="" />
            </Link>
            <div className={menu ? "nav-links-container active" : "nav-links-container"} id="nav-mobile">
                <Link className="nav-link" to="/about" onClick={showMenu}>ABOUT</Link>
                <Link className="nav-link" to="/designs" onClick={showMenu}>DESIGNS</Link>
                <Link className="nav-link" to="/gallery" onClick={showMenu}>GALLERY</Link>
                <Link className="nav-link" to="/faq" onClick={showMenu}>FAQ</Link>
                <Link className="nav-link" to="/contact" onClick={showMenu}>CONTACT</Link>
            </div>
        </nav>
        </>
    )
}

export default Navbar
