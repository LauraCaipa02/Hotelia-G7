import React from 'react';
import CardAdmin from '../../components/CardsReserva/ReservaAdmin';
import Title from '../../components/Titles/Titles';
import Navdashadmin from '../../components/navbar/Navbardashadmin';
import Headerdash from '../../components/header/Headerdash';
import Footerdash from '../../components/Footer/Footerdash';

function ReservaAdmin(){
    return(
        <section className="informacion">
            <Headerdash/>
            <Navdashadmin />
            <div>
                <Title nombre="Reservas"/>
                <CardAdmin/>
            </div>
            <Footerdash/>
        </section>
    )
}

export default ReservaAdmin;