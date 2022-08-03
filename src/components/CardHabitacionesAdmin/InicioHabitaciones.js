import './vistahabitaciones.css';
import React, { useEffect, useState } from 'react';
import { TodasHabitaciones } from '../../functions/funciones';
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
function InicioHabitaciones() {


    const [Habitaciones, setHabitaciones] = useState(null)
    useEffect(() => {
        TodasHabitaciones(setHabitaciones)
    }, [])

    const location = useLocation();
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState(location.state.date)
    const [options, setOptions] = useState(location.state.options)

    function handleSortAsc() {
        const sortedDataAsc = [...Habitaciones].sort((a, b) => { return a.valornoche < b.valornoche ? -1 : 1 });
        setHabitaciones(sortedDataAsc);
        // setSampleData("");
    }
    function handleSortDsc() {
        const sortedDataDsc = [...Habitaciones].sort((a, b) =>
            (Number(a.valornoche) < Number(b.valornoche) ? 1 : -1)
        );
        setHabitaciones(sortedDataDsc);
    }

    return (
        <div className='search-main'>

            <div className='search-column'>

                <div className='searchHotels'>
                    <div className="search">


                        <div className="search-group search-groupttl">
                            <label>Check-in </label>
                            <label onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} a ${format(date[0].endDate, "MM/dd/yyyy")}`}</label>
                            {openDate && (<DateRange onChange={(item) => setDate([item.selection])} minDate={new Date()} ranges={date} className="searchDate" />)}
                        </div>

                        <div className="search-group">
                            <div className="search-opt">
                                <button className='button-sort' onClick={handleSortAsc}>Precio de menor a mayor</button>

                            </div>
                            <div className="search-opt">
                                <button className='button-sort' onClick={handleSortDsc}>Precio de mayor a menor</button>

                            </div>
                            <div className="search-opt">
                                <label className="searchOptionsText">Adultos</label>
                                <input type="number" min={1} className="searchOptionsInput" placeholder={options.adult} />
                            </div>
                            <div className="search-opt">
                                <label className="searchOptionsText">Niños</label>
                                <input type="number" min={0} className="searchOptionsInput" placeholder={options.children} />
                            </div>
                            <div className="search-opt">
                                <label className="searchOptionsText">Mascotas</label>
                                <input type="number" min={0} className="searchOptionsInput" placeholder={options.pet} />
                            </div>
                        </div>
                        <div className="search-group">
                            <button className='button-options'>Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hotelsCol">



            </div>
            <div className="room-container">
                {Habitaciones != null ? (
                    Habitaciones.map(Habitacion => (

                        <div key={Habitacion.id} className="search-list">

                            <div className='roomcard-container'>
                                <div className='roomcard-img'>
                                    <img src={Habitacion.img} className='imgCard' />
                                </div>
                                <div className='roomcard-title'>
                                    <h3>{Habitacion.nombrehab}</h3>
                                </div>
                                <div className='roomcard-content'>

                                    <div className='roomcard-description'>
                                        <h4>Descripción:</h4>
                                        <p>{Habitacion.descripcion}</p>
                                        <h4>Número de habitación:</h4>
                                        <p>{Habitacion._id}</p>
                                    </div>

                                    <div className='roomcard-price'>
                                        <h4>Precio:</h4>
                                        <p>COP${Habitacion.valornoche}</p>
                                    </div>

                                </div>
                                <div className='roomcard-button'>
                                    <button className='botonReservar'>Reservar</button>
                                    <button className='botonEditar'>
                            Ver más
                        </button>
                                </div>
                            </div>
                        </div>
                    ))


                ) : ('no hay habitaciones')}
            </div>
        </div>
    )
}

export default InicioHabitaciones;