import { useState } from 'react'

const NavbarToggle = () => {
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
        </>
    )
}

export default NavbarToggle
