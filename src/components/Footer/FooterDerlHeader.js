import React from 'react';
import './FooterDerlHeader.css';
import LogoSolo from '../../assets/img/LogoSolo.png';
import redes from '../../assets/img/redes.png';
import booking from '../../assets/img/booking.png';
import airbnb from '../../assets/img/airbnb.png';
import trivago from '../../assets/img/trivago.png';
import paginashotel from '../../assets/img/paginashotel.png';



function FooterDerlHeader() {
    return (
        <div className='PrincipalFooter'>
            <div className='contactoFooter'>
                <img src={LogoSolo} className='LogoSolo' alt="" />
                <p>+57 601 5377175</p>
                <p>Cra. 42 #22a83, Bogotá</p>
                <p>contacto@hotelia.com</p>
            </div>
            <div className='RedSocialFooter'>
                <h4>SIGUENOS</h4>
                <img src={redes} className='Redes' alt=""/>
            </div>
            <div className='hotelFooter'>
                <h4>ENCUENTRANOS</h4>
                <div className='paginashotel'>
                    <img src={booking} className='paginashotel1'alt="" />
                    <img src={airbnb} className='paginashotel2' alt=""/>
                    <img src={trivago} className='paginashotel3'alt="" />
                </div>
                <div className='paginashotelgrande'>
                    <img src={paginashotel} className='paginashotel4'alt="" />
                </div>
            </div>

        </div>
    );



}

export default FooterDerlHeader;