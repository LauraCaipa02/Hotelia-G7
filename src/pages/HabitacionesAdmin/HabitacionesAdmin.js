import React from 'react';
import BarraDeBusquedaListHab from '../../components/BarraDeBusqueda/BarraDeBusquedaListHab';
import CardHabitacionesAdmin from '../../components/CardHabitacionesAdmin/CardHabitacionesAdmin';




function ListadoHabitacionesAdmin() {
  return (
    <div >
      <BarraDeBusquedaListHab/>
      <CardHabitacionesAdmin/>

    </div>
  );
}

export default ListadoHabitacionesAdmin;