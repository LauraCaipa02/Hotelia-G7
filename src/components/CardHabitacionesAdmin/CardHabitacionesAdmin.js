import './CardHabitacionesAdmin.css';
import React, { useEffect, useState } from 'react';
import { TodasHabitaciones } from '../../functions/funciones';



const CardHabitacionesAdmin = () => {

    const [Habitaciones, setHabitaciones] = useState(null)
    useEffect(() => {
        TodasHabitaciones(setHabitaciones)
    }, [])

    return (
        <>
            {Habitaciones != null ? (
                Habitaciones.map(Habitacion => (

                    <div key={Habitacion.id}>
                        
                        <div className='PrincipalCardHabitacionesAdmin'>
                            <div className='ImgCardHabitacionesAdmin'>
                                <img src={Habitacion.img} className='imgCard' />
                            </div>
                            <div className='NombreContenidoCardHabitacionesAdmin'>
                                <h3>{Habitacion.nombrehab}</h3>
                            </div>
                            <div className='ContenidoCardHabitacionesAdmin'>

                                <div className='DescripcionContenidoCardHabitacionesAdmin'>
                                    <h4>Descripción:</h4>
                                    <p>{Habitacion.descripcion}</p>
                                    <h4>Número de habitación:</h4>
                                    <p>{Habitacion._id}</p>
                                </div>
                                <div className='EspecificacionesContenidoCardHabitacionesAdmin'>
                                    <h4>Especificaciones:</h4>
                                    <p>Nevera y televisión: {Habitacion.tv}</p>
                                    <p>Caja fuerte: {Habitacion.cajafuerte}</p>
                                    <p>Baño privado: {Habitacion.banio}</p>
                                </div>
                                <div className='PrecioContenidoCardHabitacionesAdmin'>
                                    <h4>Precio:</h4>
                                    <p>{Habitacion.valornoche}</p>
                                </div>
                                <div className='EstadoContenidoCardHabitacionesAdmin'>
                                    <h4>Estado:</h4>
                                    <p>Disponible</p>
                                </div>
                            </div>
                            <div className='BotonesCardHabitacionesAdmin'>
                                <button className='botonReservar'>Reservar</button>
                                <button className='botonEditar'>Editar</button>
                            </div>
                        </div>
                    </div>
                ))


            ) : ('no hay habitaciones')}
        </>

    );
}

export default CardHabitacionesAdmin;