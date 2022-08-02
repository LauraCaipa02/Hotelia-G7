import React , { useState,useEffect }from 'react';
import axios from "axios";
import './reserva.css';
import {faAngleUp,faAngleDown} from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import habitacion1 from '../../assets/img/WhatsApp Image 2022-07-08 at 7.00.58 PM.jpeg';
import Boton from '../Botones/Botones';
import Swal from 'sweetalert2';

const Card = () => {
    const [show, setShow] = useState(true);

    //1.Definir url del api a la que me va a conectar
    const url = "https://hoteliakuepa.herokuapp.com/reservas/62d0ca485d2107d3fb8595de";

    //2. Generar función asincrona
    const getData = async () => {
        const response = axios.get(url);
        return response;
    };

    //3. UseState para guardar la respuesta de la petición

    const [list, setList] = useState([]);

    //4.Crear otro estado para refrescar el listado después de eliminar
    const [upList, setUplist] =useState([false]); 

    //5. Agregar una constante para actualiaar el estado del modal 
    const [shows,setShows]=useState(false);

    const handleClose=()=>{setShows(false);}
    const handleOpen=()=>{setShows(true);}

    const [dataModal,setDataModal]=useState({});

    const handleChangeModal=({target})=>{ //tarteg permite generar un nuevo evento
        setDataModal({...dataModal,[target.name]:target.value
        });
    }
    console.log(dataModal);

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await axios.put(`${url}`,dataModal);
        console.log(response);
        if(response.status===200){
            Swal.fire(
                '¡Cambios Guardados!',
                `Los datos de contacto han sido actualizados`,
                'success'
            )
            handleClose();
            setUplist(!upList);
        }else{
            Swal.fire(
            '¡Error!',
            'Hubo un problema al editar los datos de contacto',
            'error'
            )
        }
    }

    const handleSubmitPassword=async(e)=>{
        e.preventDefault();
        if(dataModal.contraseña===list.password){
            if(dataModal.password===dataModal.contraseñac){
                const response=await axios.put(`${url}`,dataModal);
                Swal.fire(
                    '¡Cambios Guardados!',
                    `Los datos de contacto han sido actualizados`,
                    'success'
                )
                handleClose();
                window.location.href='/habitaciones';
                setUplist(!upList);
            } else{
                Swal.fire(
                    '¡Error!',
                    'Hubo un problema,',
                    'error'
                    )
            }
        }else{
            Swal.fire(
            '¡Error!',
            'Hubo un problema',
            'error'
            )
        }
    }

    //console.log(setDataModal);

    //6. Hook useEffect ejecuta funciones cada vez que renderizamos un componente.
    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
        });
    }, []); //Se actualiza el listado cada vez que cambie el estado up List
    console.log(list);

    return (
    <main className='maininfor'>

        <div className='container_card'>

        <div className='Container_one'>
                <div className='lt_reserva'>{`Reserva:${list._id}`}</div>
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
        <div className='text_r'>{list.fentrada}</div>
        </div>

        <div>
        <div className='label'>Salida</div>
        <div className='text_r'>{list.fsalida}</div>
        </div>

        <div>
        <div className='label'>Noches</div>
        <div className='text_r'>{list.cantidadNoches}</div>
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