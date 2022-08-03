import React from 'react';
import './CardHabitacionesAdmin.css';
import habitacion1 from '../../assets/img/WhatsApp Image 2022-07-08 at 7.00.58 PM.jpeg';

function CardHabitacionesUsuario({rooms}) {

    return (
        <div className='PrincipalCardHabitacionesAdmin' key={rooms._id}>
            <div className='ImgCardHabitacionesAdmin'>
                <img src={habitacion1} alt='' className='imgCard' />
            </div>
            <div className='NombreContenidoCardHabitacionesAdmin'>
                    <h3>{rooms.nombrehab}</h3>
            </div>
            <div className='ContenidoCardHabitacionesAdmin'>

                <div className='DescripcionContenidoCardHabitacionesAdmin'>
                    <h4>Descripción:</h4>
                    <p>{rooms.descripcion}</p>
                </div>
                <div className='EspecificacionesContenidoCardHabitacionesAdmin'>
                    {/*arreglar logica*/} 
                    <h4>Especificaciones:</h4> 
                    <p>Televisión: {rooms.tv}</p>
                    <p>Nevera: {rooms.nevera}</p>
                    <p>Caja fuerte: {rooms.cajafuerte}</p>
                    <p>Wi-Fi: {rooms.wifi}</p>
                    <p>Baño privado: {rooms.banio}</p>
                </div>
                <div className='PrecioContenidoCardHabitacionesAdmin'>
                    <h4>Precio:</h4>
                    <p>${rooms.valornoche} noche</p>
                </div>
                <div className='EstadoContenidoCardHabitacionesAdmin'>
                    <h4>Estado:</h4>
                    <p>{rooms.estado}</p>
                </div>
            </div>
            <div className='BotonesCardHabitacionesAdmin'>
            <button className='botonEditar'>Ver Más</button>
                <button className='botonReservar'>Reservar</button>
                
            </div>
        </div>
    );
}

export default CardHabitacionesUsuario;