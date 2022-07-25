import React from 'react';
import './BarraDeBusquedaListHab.css';



function BarraDeBusquedaListHab(){
    return(
        <div className='PrincipalBarraDeBusquedaListHab'>
            <div className='NomBarraDeBusquedaListHab'>
            <input name="nom" id="nom" type="text" placeholder="Nombre de habitación" className='InputNomHab' />
            </div>
            <div className='NumBarraDeBusquedaListHab'>
            <input name="num" id="num" type="text" placeholder="Número de habitación" className='InputNumHab' />
            </div>
            <div className='DispoBarraDeBusquedaListHab'>
            <input name="dispo" id="dispo" type="text" placeholder="Disponibilidad" className='InputDispoHab' />
            </div>
            <div className='BotonBarraDeBusquedaListHab'>
                    <button className='botonSearch'>Filtrar</button>
            </div>
        </div>
    );



}

export default BarraDeBusquedaListHab;