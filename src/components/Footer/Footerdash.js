import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBed,faUserAstronaut,faCalendarCheck} from '@fortawesome/free-solid-svg-icons';
/*import navbarLink from '../navbar/Navbarlink';
import LinkCustom from '../navbar/Linkcustom';*/
import './Footer.css';

function Footerdash() {
    return (
        <footer className='Footerdash'>
            <nav className='Footerdash_nav'>
            <ul className="nav_menu-items">
                <li>
                    <a href='/perfil'className='container_btn_nav'>
                        <FontAwesomeIcon icon={faUserAstronaut} className="icon_navdash" />
                        <p>Perfil</p>
                    </a>
                </li>

                <li>
                    <a href='/reservas' className='container_btn_nav'>
                        <FontAwesomeIcon icon={faCalendarCheck} className="icon_navdash" />
                        <p>Mis Reservas</p>
                    </a>
                </li>

                <li>
                    <a href='habitaciones' className='container_btn_nav'>
                        <FontAwesomeIcon icon={faBed} className="icon_navdash"/>
                        <p>Habitaciones Disponibles</p>
                    </a>
                </li>
            </ul>
            </nav>
        </footer>
    )
}

export default Footerdash;