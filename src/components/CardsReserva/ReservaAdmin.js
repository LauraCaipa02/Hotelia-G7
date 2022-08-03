import React , { useState }from 'react';
import './reserva.css';
import {faAngleUp,faAngleDown} from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import habitacion1 from '../../assets/grid/room1.png';
import Boton from '../Botones/Botones';

const Card = () => {
    const [show, setShow] = useState(true);

    return (
    <main className='maininfor'>

        <div className='container_card'>

        <div className='Container_one'>
                <div className='lt_reserva'>Reserva: DR3423423</div>
                <button 
                type="button"
                onClick={() => {setShow(!show);}}
                className=''><FontAwesomeIcon icon={faAngleDown} className="icon_btn" />Ver Más</button>
        </div>

        {show ? (
        <div>
            <div className='Container_two'>
        <div>
        <div className='label'>Entrada</div>
        <div className='text_r'>05/08/2022</div>
        </div>

        <div>
        <div className='label'>Salida</div>
        <div className='text_r'>10/08/2022</div>
        </div>

        <div>
        <div className='label'>Noches</div>
        <div className='text_r'>5</div>
        </div>

        <div>
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
        </div>
        </div>

        <div className='Container_three'>
            <div className='label'>Descripción</div>
            <div className='text_r text_ct'>HABITACIÓN ACOMODACIÓN FAMILIAR</div>
        </div>

        <div className='Container_four'>
            <div className='container_cf' >
            <div className='label'>ESTADO</div>
            <div className='text_r text_cf '>Activa</div>
            </div>

            <div className='container_fc' >
            <div className='label text_cfp fl'>PRECIO</div>
            <div className='text_r text_cfp fb'>100.000 COP</div>
            </div>
        </div> 
        </div>
        ) : (
        <div className='container_card_2'>
        <div className='container_cf' >
            <div className='label'>Unidades:</div>
            <div className='text_r text_cf '>1</div>
        </div>
        <div className='Container_two'>
        <div>
        <div className='label'>Entrada</div>
        <div className='text_r'>05/08/2022</div>
        </div>

        <div>
        <div className='label'>Salida</div>
        <div className='text_r'>10/08/2022</div>
        </div>

        <div>
        <div className='label'>Noches</div>
        <div className='text_r'>5</div>
        </div>

        <div>
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
        </div>
        </div>

        <div className='Container_three_2'>
            <img src={habitacion1} alt='' className='imgCard_2' />
            <div className='Container_three_21'>
            <div className='label'>HABITACIÓN ACOMODACIÓN FAMILIAR</div>
            <div className='text_r text_ct_2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta consectetur magna in semper. Phasellus sit amet vulputate mi. In egestas quam at nisi dictum, eu congue urna finibus. Duis mauris nunc, feugiat sit amet auctor sit amet, malesuada eget est. </div>
            </div>
        </div>

        <div className='Container_four'>
        <div className='container_fc_2' >
            <div className='label text_cfp fl'>Usuario</div>
            <div className='text_r text_cfp fb'>Susana Pérez Pérez</div>
            </div>
            <Boton texto={"VER PERFIL"}  clase={"btn_blue btn_e"}/>
        </div>

        <div className='Container_four'>
            <div className='container_fc_2' >
            <div className='label text_cfp fl'>PRECIO</div>
            <div className='text_r text_cfp fb'>100.000 COP</div>
            </div>
        </div>
        <div className='container_btn_pu'>
            <Boton texto={"CANCELAR RESERVA"}  clase={"btn_oranje "}/>
        </div>
        </div>
        )}
        </div>

    </main>
    );
}

export default Card;