import React from 'react';
import './CardHabitacionesAdmin.css';
import habitacion1 from '../../img/WhatsApp Image 2022-07-08 at 7.00.58 PM.jpeg';

function CardHabitacionesUsuario() {
    return (
        <div className='PrincipalCardHabitacionesAdmin'>
            <div className='ImgCardHabitacionesAdmin'>
                <img src={habitacion1} alt='' className='imgCard' />
            </div>
            <div className='NombreContenidoCardHabitacionesAdmin'>
                    <h3>Nombre de la habitación</h3>
            </div>
            <div className='ContenidoCardHabitacionesAdmin'>

                <div className='DescripcionContenidoCardHabitacionesAdmin'>
                    <h4>Descripción:</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                <div className='EspecificacionesContenidoCardHabitacionesAdmin'>
                    <h4>Especificaciones:</h4>
                    <p>Nevera y televisión</p>
                    <p>Caja fuerte</p>
                    <p>Balcón con vista</p>
                    <p>Espacio de 30m2</p>
                    <p>Baño privado</p>
                </div>
                <div className='PrecioContenidoCardHabitacionesAdmin'>
                    <h4>Precio:</h4>
                    <p>$100.000 COP. noche</p>
                </div>
                <div className='EstadoContenidoCardHabitacionesAdmin'>
                    <h4>Estado:</h4>
                    <p>Disponible</p>
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