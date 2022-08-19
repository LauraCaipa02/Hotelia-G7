import React , { useState}from 'react';
import './reserva.css';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Boton from '../Botones/Botones';

function CardAdmin({booking}){
    const [show, setShow] = useState(true);

    const user=booking["user"];
    const dataUser=user[0];

    const room=booking["habitaciones"];
    const dataRoom=room[0];
    console.log(dataRoom.nombrehab)

    return (
    <main className='maininfor'>

        <div className='container_card' key={booking._id}>

        <div className='Container_one'>
            <div className='lt_reserva'>Reserva: {booking._id}</div>
            <button 
            type="button"
            onClick={() => {setShow(!show);}}
            ><FontAwesomeIcon icon={faAngleDown} className="icon_btn" />Ver Más</button>
        </div>

        {show ? (
        <div className='Container_two_card'>
            <div className='Container_two'>
        <div>
        <div className='label'>Entrada</div>
        <div className='text_r'>{booking.fentrada}</div>
        </div>

        <div>
        <div className='label'>Salida</div>
        <div className='text_r'>{booking.fsalida}</div>
        </div>

        <div>
        <div className='label'>Noches</div>
        <div className='text_r'>{booking.cantidadNoches}</div>
        </div>

        {/* <div>
            <div className='label'>Huéspedes</div>
            <div className='container_hu'>
                <div className='container_h' >
                    <div className='text_r text_rh'>Adultos:</div>
                    <div className='text_r text_rh'>1</div>
                </div>
                <div className='container_h' >
                    <div className='text_r text_hr'>Niños:</div>
                    <div className='text_r text_rh'>1</div>
                </div>
            </div>
        </div> */}
        </div>

        <div className='Container_three'>
            <div className='label porcentl'>Descripción</div>
            <div className='text_r text_ct porcenti'>{dataRoom.nombrehab.toUpperCase()}</div>
        </div>

        <div className='Container_four'>
            <div className='container_cf_est' >
            <div className='label'>ESTADO</div>
            <div className='text_r text_cf '>Activa</div>
            </div>

            <div className='container_fc' >
            <div className='label text_cfp fl'>PRECIO TOTAL</div>
            <div className='text_r text_cfp fb'>{booking.totalreserva} COP</div>
            </div>
        </div> 
        </div>
        ) : (
        <div className='container_card_2'>
        <div className='container_cf_gi' >
            <div className='group_info'>
            <div className='label label_pc'>Precio por noche:</div>
            <div className='text_r text_cf '>{dataRoom.valornoche} COP</div>
            </div>
            <div className='group_info'>
            <div className='label label_pc'>Fecha de Reserva:</div>
            <div className='text_r text_cf '>{booking.freserva}</div>
            </div>
        </div>
        <div className='Container_two'>
        <div>
        <div className='label'>Entrada</div>
        <div className='text_r'>{booking.fentrada}</div>
        </div>

        <div>
        <div className='label'>Salida</div>
        <div className='text_r'>{booking.fsalida}</div>
        </div>

        <div>
        <div className='label'>Noches</div>
        <div className='text_r'>{booking.cantidadNoches}</div>
        </div>

        {/* <div>
            <div className='label'>Huéspedes</div>
            <div className='container_hu'>
            <div className='container_h' >
                <div className='text_r text_rh'>Adultos:</div>
                <div className='text_r text_rh'>1</div>
            </div>
            <div className='container_h' >
                <div className='text_r text_hr'>Niños:</div>
                <div className='text_r text_rh'>1</div>
            </div>
            </div>
        </div> */}
        </div>

        <div className='Container_three_2'>
            <img src={`https://hoteliakuepa.herokuapp.com${dataRoom.img}`} alt='' className='imgCard_2' />
            <div className='Container_three_21'>
            <div className='label'>{dataRoom.nombrehab.toUpperCase()}</div>
            <div className='text_r text_ct_2'>{dataRoom.descripcion}</div>
            </div>
        </div>

        <div className='Container_four Container_four_grid'>
            <div className='container_fc_4' >
                <div className='label text_cfp flf'>Usuario</div>
                <div className='text_r text_cfp fbf'>{dataUser.nombre} {dataUser.apellido}</div>
            </div>

            <div className='container_fc_4' >
                <div className='label  label_pc_du'>Número Identificación</div>
                <div className='text_r fbf_du'>{dataUser._id}</div>
            </div>

            <div className='container_fc_4' >
                <div className='label  label_pc_du'>Tipo de Documento</div>
                <div className='text_r fbf_du'>{dataUser.tipodoc}</div>
            </div>

            <div className='container_fc_4' >
                <div className='label  label_pc_du'>Correo Electrónico</div>
                <div className='text_r fbf_du'>{dataUser.email}</div>
            </div>

            <div className='container_fc_4' >
                <div className='label  label_pc_du'>Teléfono</div>
                <div className='text_r fbf_du'>{dataUser.telefono}</div>
            </div>
            
        </div>

        <div className='Container_four'>
            <div className='container_fc_2' >
            <div className='label text_cfp fl'>PRECIO TOTAL</div>
            <div className='text_r text_cfp fb'>{booking.totalreserva} COP</div>
            </div>
        </div>
        <div className='container_btn_pu'>
            <Boton texto={"CANCELAR RESERVA"}  clase={"btn_oranje "} />
        </div>
        </div>
        )}
        </div>

    </main>
    );
}

export {CardAdmin};