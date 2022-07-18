import React from 'react';
import './perfilu.css'
import CardAdmin from '../../components/CardsReserva/Reserva';
import Title from '../../components/Titles/Titles';
import Navdash from '../../components/navbar/Navbardash';
import Headerdash from '../../components/header/Headerdash';
import Footerdash from '../../components/Footer/Footerdash';

function ReservaUsuario(){
    return(
        <section className="informacion">
            <Headerdash/>
            <Navdash />
            <div className='content'>
                <Title nombre="Reservas"/>
                <CardAdmin/>
            </div>
            <Footerdash/>
        </section>
    )
}

export default ReservaUsuario;