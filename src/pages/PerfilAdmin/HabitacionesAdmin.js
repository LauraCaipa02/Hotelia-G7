import React from 'react';
import CardHabitacionesAdmin from '../../components/CardHabitacionesAdmin/CardHabitacionesAdmin'
import Title from '../../components/Titles/Titles';
import Navdashadmin from '../../components/navbar/Navbardashadmin';
import Headerdash from '../../components/header/Headerdash';
import Footerdash from '../../components/Footer/Footerdash';
import BarraDeBusquedaListHab from '../../components/BarraDeBusqueda/BarraDeBusquedaListHab'

function HabitacionesAdmin(){
    return(
        <section className="informacion">
            <Headerdash/>
            <Navdashadmin />
            <div>
                <Title nombre="Reservas"/>
                <BarraDeBusquedaListHab/>
                <CardHabitacionesAdmin/>
            </div>
            <Footerdash/>
        </section>
    )
}

export default HabitacionesAdmin;