import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className='Header'>
            <NavLink to="/" className={(Link) => (Link.isActive ? "Link-active" : "Link")}>
                Random <span className='Logo-active'>App</span>
            </NavLink>
            <div className="Nav">
                <NavLink to="/" className={(Link) => (Link.isActive ? "Link-active" : "Link")}>
                    Accueil
                </NavLink>
                <NavLink to="/login" className={(Link) => (Link.isActive ? "Link-active" : "Link")}>
                    Login
                </NavLink>
                <NavLink to="/password" className={(Link) => (Link.isActive ? "Link-active" : "Link")}>
                    Password
                </NavLink>
            </div>
        </header>
    )
}

export default Header
