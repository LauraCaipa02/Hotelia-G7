import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBed,faUserAstronaut,faCalendarCheck,faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import Logo from '../../assets/img/LogoSolo.png'
import LogoHover from '../../assets/img/logo.png'

function Navdash() {
    return (
        <>
        <nav className='dash_nav'>
            <a href='./perfil' className='logo_navd'><img src={Logo} alt=''/></a>
            <ul className="nav_menu_items">

                <li>
                    <a href='/perfil'className='container_btn_nav'>
                        <FontAwesomeIcon icon={faUserAstronaut} className="icon_navdash" />
                    </a>
                </li>

                <li>
                    <a href='/reservas' className='container_btn_nav'>
                        <FontAwesomeIcon icon={faCalendarCheck} className="icon_navdash" />
                    </a>
                </li>

                <li>
                    <a href='habitaciones' className='container_btn_nav'>
                        <FontAwesomeIcon icon={faBed} className="icon_navdash"/>
                    </a>
                </li>
            </ul>

            <div className='icon_close'>
            <a href='habitaciones' className='container_btn_nav'>
                <FontAwesomeIcon icon={faArrowRightFromBracket} className="icon_navdash"/>
            </a>
            </div>
        </nav>

        <div className='overlay_hover'>
        <nav className='dash_nav_hover'>
            <a href='./perfil' className='logo_navd_hover'><img src={LogoHover} alt=''/></a>
            <ul className="nav_menu_items_hover">

                <li>
                    <a href='/perfil'className='container_btn_nav_hover'>
                        <FontAwesomeIcon icon={faUserAstronaut} className="icon_navdash_hover" />
                        <p>Perfil</p>
                    </a>
                </li>

                <li>
                    <a href='/reservas' className='container_btn_nav_hover'>
                        <FontAwesomeIcon icon={faCalendarCheck} className="icon_navdash_hover" />
                        <p>Mis Reservas</p>
                    </a>
                </li>

                <li>
                    <a href='habitaciones' className='container_btn_nav_hover'>
                        <FontAwesomeIcon icon={faBed} className="icon_navdash_hover"/>
                        <p>Habitaciones Disponibles</p>
                    </a>
                </li>
            </ul>

            <div className='icon_close_hover'>
            <a href='habitaciones' className='container_btn_nav_hover'>
                <FontAwesomeIcon icon={faArrowRightFromBracket} className="icon_navdash_hover"/>
                <p>Cerrar Sesión</p>
            </a>
            </div>
        </nav>
        </div>
        </>
    )
}

export default Navdash;