import React from 'react';
import CardHabitacionesUsuario from '../../components/CardHabitacionesAdmin/CardHabitacionesUsuario'
import Title from '../../components/Titles/Titles';
import Navdashadmin from '../../components/navbar/Navbardashadmin';
import Headerdash from '../../components/header/Headerdash';
import Footerdash from '../../components/Footer/Footerdash';
import BarraDeBusquedaListHab from '../../components/BarraDeBusqueda/BarraDeBusquedaListHab'

function HabitacionesUsuario(){
    return(
        <section className="informacion">
            <Headerdash/>
            <Navdashadmin />
            <div>
                <Title nombre="Reservas"/>
                <BarraDeBusquedaListHab/>
                <CardHabitacionesUsuario/>
            </div>
            <Footerdash/>
        </section>
    )
}

export default HabitacionesUsuario;