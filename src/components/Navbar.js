import logo from '../img/logo.svg'

const Navbar = () => {
    return (
        <nav>
            <a className="nav-logo" href="/">
                <img src={logo} alt="" />
            </a>
            <div className="nav-links-container" id="nav-mobile">
                <a className="nav-link" href="/">ABOUT</a>
                <a className="nav-link" href="/">DESIGNS</a>
                <a className="nav-link" href="/">GALLERY</a>
                <a className="nav-link" href="/">FAQ</a>
                <a className="nav-link" href="/">CONTACT</a>
            </div>
            {/* <input type="checkbox" id="nav" className="hidden"/>
            <label htmlFor="nav" className="nav-mobile-toggle">
                <i></i>
                <i></i>
                <i></i>
            </label> */}
        </nav>
    )
}

export default Navbar
