import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <header className="navbar-header">
            <div className="navbar-logo"></div>
        <nav className="navbar-side">
            <ul className="nav-ul">
            <li className="nav-li"><Link to='/'><i class="fa-solid fa-house"></i> Inicio</Link></li>
            <li className="nav-li"><Link to='/busqueda'><i class="fa-solid fa-bed"></i> Habitaciones</Link></li>
            <li className="nav-li"><Link to='/servicios'><i class="fa-solid fa-hotel"></i> Servicios</Link></li>
            <li className="nav-li"><Link to='/contacto'><i class="fa-solid fa-message"></i> Contacto</Link></li>
            <li className="nav-li login-li"><Link to='/login'><i class="fa-solid fa-user"></i> Iniciar Sesión</Link></li>
            </ul>
        </nav>
        </header>
    )
}

export default Navbar;