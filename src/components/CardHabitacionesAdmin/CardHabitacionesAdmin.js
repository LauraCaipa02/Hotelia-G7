import './CardHabitacionesAdmin.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const CardHabitacionesAdmin = ({ habitacion }) => {

    return (
        <>

            <div className='PrincipalCardHabitacionesAdmin'>
                <div className='ImgCardHabitacionesAdmin'>
                    <img src={habitacion.img} className='imgCard' alt="" />
                </div>
                <div className='NombreContenidoCardHabitacionesAdmin'>
                    <h3>{habitacion.nombrehab}</h3>
                </div>
                <div className='PrecioContenidoCardHabitacionesAdmin'>
                    <h3>${habitacion.valornoche} COP</h3>
                </div>
                <div className='ContenidoCardHabitacionesAdmin'>

                    <div className='DescripcionContenidoCardHabitacionesAdmin'>
                        <h4>Descripción:</h4>
                        <p>{habitacion.descripcion}</p>
                        <h4>Número de habitación:</h4>
                        <p>{habitacion._id}</p>
                    </div>
                    <div className='EspecificacionesContenidoCardHabitacionesAdmin'>
                        <h4>Especificaciones:</h4>
                        <p>Nevera y televisión: {habitacion.tv}</p>
                        <p>Caja fuerte: {habitacion.cajafuerte}</p>
                        <p>Baño privado: {habitacion.banio}</p>
                    </div>
                    <div className='EstadoContenidoCardHabitacionesAdmin'>
                        <h4>Estado:</h4>
                        <p>{habitacion.estado}</p>
                    </div>
                </div>
                <div className='BotonesCardHabitacionesAdmin'>
                    <button className='botonReservar'> Reservar </button>
                    <button className='botonEditar' > Editar </button>
                    <button className='botonEstado'> Estado </button>
                </div>
            </div>

        </>

    );

}

export default CardHabitacionesAdmin;