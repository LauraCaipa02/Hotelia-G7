import React from 'react';
import Logo from '../../assets/img/logo2.png';
import './Header.css';

function Headerdash() {
    return (
        <header className='Headerdash'>
            <img src={Logo} alt='Logo' className='img_header_dash'/>
        </header>
    )
}

export default Headerdash;