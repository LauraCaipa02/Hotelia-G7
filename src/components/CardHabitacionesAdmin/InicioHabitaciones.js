import './vistahabitaciones.css';
import React, { useEffect, useState } from 'react';
import { TodasHabitaciones } from '../../functions/funciones';
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import useFetch from './useFetch'

function InicioHabitaciones() {


    const [Habitaciones, setHabitaciones] = useState(null)
    useEffect(() => {
        TodasHabitaciones(setHabitaciones)
    }, [])

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination)
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState(location.state.date)
    const [options, setOptions] = useState(location.state.options)
    const [min, setMin] = useState(undefined)
    const [max, setMax] = useState(undefined)

    const { data, loading, error, reFetch } = useFetch(`api/hotels?city=${destination}&min=${min || 0}&max=${max || 9999}`);
    //console.log(data);

    const handleClick = () => {
        reFetch();
    }

    return (
        <div className='search-main'>

            <div className='search-column'>
                <div className="hotelsContainer">
                    <div className="hotelsRow">
                        <div className="hotelsCol">
                            <div className='searchHotels'>
                                <div className="search">
                                    

                                    <div className="search-group search-groupttl">
                                        <label>Check-in </label>
                                        <label onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} a ${format(date[0].endDate, "MM/dd/yyyy")}`}</label>
                                        {openDate && (<DateRange onChange={(item) => setDate([item.selection])} minDate={new Date()} ranges={date} className="searchDate" />)}
                                    </div>

                                    <div className="search-group">
                                            <div className="search-opt">
                                                <label className="searchOptionsText">Precio minimo</label>
                                                <input type="number" onChange={e => setMin(e.target.value)} className="searchOptionsInput" />
                                            </div>
                                            <div className="search-opt">
                                                <label className="searchOptionsText">Precio maximo</label>
                                                <input type="number" onChange={e => setMax(e.target.value)} className="searchOptionsInput" />
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
                                                <input type="number" min={1} className="searchOptionsInput" placeholder={options.room} />
                                            </div>
                                    </div>
                                    <div className="search-group">
                                        <button className='button-options' onClick={handleClick}>Buscar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hotelsCol">
                            
                        </div>
                    </div>
                </div>

            </div>
            <>
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
                                    <div className='roomcard-items'>
                                        <h4>Especificaciones:</h4>
                                        <p>Nevera y televisión: {Habitacion.tv}</p>
                                        <p>Caja fuerte: {Habitacion.cajafuerte}</p>
                                        <p>Baño privado: {Habitacion.banio}</p>
                                    </div>
                                    <div className='roomcard-price'>
                                        <h4>Precio:</h4>
                                        <p>{Habitacion.valornoche}</p>
                                    </div>
                                    <div className='roomcard-state'>
                                        <h4>Estado:</h4>
                                        <p>Disponible</p>
                                    </div>
                                </div>
                                <div className='roomcard-button'>
                                    <button className='botonReservar'>Reservar</button>
                                    <button className='botonEditar'>Ver más</button>
                                </div>
                            </div>
                        </div>
                    ))


                ) : ('no hay habitaciones')}
            </>
        </div>
    )
}

export default InicioHabitaciones;