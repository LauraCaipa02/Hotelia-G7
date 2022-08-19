import React, {useEffect,useState } from "react";
import './CardHabitacionesAdmin.css';
import habitacion1 from '../../assets/img/WhatsApp Image 2022-07-08 at 7.00.58 PM.jpeg';
import ModalReserva from "../Modal/ModalReserva";
import axios from 'axios';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';

function CardHabitacionesUsuario({rooms}) {
    const [data, setData] = useState({ fentrada: "", fsalida: "", cantidadNoches: "", totalreserva: "", userId: "", habitacionId: "" });
    const handleChangeA = ({ target }) => {

        setData({
            ...data,
            [target.name]: target.value
        })
    }


    const url = "https://hoteliakuepag7.herokuapp.com/reservas";

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        const response = await axios.post(url, data);
        console.log(response);
        if (response.status === 200) {
            Swal.fire(
                'Exitoso',
                `Reserva Guardada`,
                'success'
            )
            Navigate.push("/");
        } else {
            Swal.fire(
                'Error!',
                `Hubo un problema al registrar tu reserva!`,
                'error'
            )
        }
    }

    const disableDate = new Date().toISOString().slice(0, 10);
    const [estadoModalReserva, cambiarEstadoReserva] = useState(false);

    const dates = rooms.reservas.filter(f => f.fechaEntrada);

    const cantidadNoches = () => {
        var fechaE = new Date(document.getElementById('fentrada').value);
        var fechaS = new Date(document.getElementById('fsalida').value);
        var time = fechaS.getTime() - fechaE.getTime();
        var days = Math.floor(time / (1000 * 60 * 60 * 24));
        document.getElementById("cantidadNoches").value = days;
        var totalReserva = days * rooms.valornoche;
        document.getElementById("totalreserva").value = totalReserva;
        data.cantidadNoches = days;
        console.log(data.cantidadNoches);
        data.totalreserva = totalReserva;
        console.log(data.totalreserva);
    }

    data.habitacionId=rooms._id;
    
    //1.Definir url del api a la que me va a conectar
    const urlc = "https://hoteliakuepag7.herokuapp.com/users/1357908642";

    //2. Generar función asincrona
    const getData = async () => {
        const response = axios.get(urlc);
        return response;
    };



    //3. UseState para guardar la respuesta de la petición

    const [list, setList] = useState([]);

    //6. Hook useEffect ejecuta funciones cada vez que renderizamos un componente.
    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
        });
    }, []); 

    data.userId=list._id

    return (
        <>
            <div className='PrincipalCardHabitacionesAdmin'>
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
                    {/* <h4>Número de habitación:</h4>
                        <p>{//rooms._id}</p> */}
                </div>
                <div className='EspecificacionesContenidoCardHabitacionesAdmin'>
                    <h4>Especificaciones:</h4>
                    <p>Nevera : {rooms.nevera}</p>
                    <p>Televisión: {rooms.tv}</p>
                    <p>Caja fuerte: {rooms.cajafuerte}</p>
                    <p>Wifi: {rooms.wifi}</p>
                    <p>Baño privado: {rooms.banio}</p>
                </div>
                <div className='PrecioContenidoCardHabitacionesAdmin'>
                    <h4>Precio Noche:</h4>
                    <p>${rooms.valornoche} COP</p>
                </div>
                <div className='EstadoContenidoCardHabitacionesAdmin'>
                    <h4>Estado:</h4>
                    <p>{rooms.estado}</p>
                </div>
            </div>
            <div className='BotonesCardHabitacionesAdmin'>
            <button className='botonEditar'>Ver Más</button>
                <button className='botonReservar' onClick={() => cambiarEstadoReserva(!estadoModalReserva)}>Reservar</button>
                
            </div>
        </div>
        <ModalReserva
                    onSubmit={handleSubmit}
                    estado={estadoModalReserva}
                    cambiarEstado={cambiarEstadoReserva}
                    title={"RESERVA"}
                    textbb={"Volver"}
                    textbo={"Guardar"}
                >
                    <div>
                    <div>
                        <h3>Información Usuario</h3>
                        <div className="Container_info__hab">
                            <div className="containerc_li containerc_num">
                                <label htmlFor="name" className="label_modal ">
                                    Número de Documento:
                                </label>
                                <input
                                    id='userId'
                                    name='userId'
                                    type='text'
                                    value={data.userId}
                                    //onChange={handleChangeA}
                                    className="input inputinput "
                                    disabled
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3>Información Habitación</h3>
                        <div className="Container_info__hab">
                            <div className="containerc_li containerc_num">
                                <label htmlFor="name" className="label_modal ">
                                    Número:
                                </label>
                                <input
                                    id='habitacionId'
                                    name='habitacionId'
                                    type='text'
                                    value={data.habitacionId}
                                    //onChange={handleChangeA}
                                    max="10"
                                    disabled
                                    className="input inputinput inputfont"
                                />
                            </div>
                        </div>
                    </div>

                    <h3>Información Reserva</h3>
                        <div className="Container_info__hab">
                            <div className="containerc_li containerc_num">
                                <label htmlFor="name" className="label_modal ">
                                    Fecha Entrada:
                                </label>
                                <input
                                    id="fentrada"
                                    name="fentrada"
                                    type="date"
                                    min={disableDate}
                                    onChange={handleChangeA}
                                    onBlur={cantidadNoches}
                                    data-inputmask="'alias': 'yyyy/MM/dd'"
                                    data-mask required
                                    value={data.fentrada}
                                    className="input inputinput inputfont"
                                />
                            </div>
    
                            <div className="containerc_li containerc_name con_fec">
                                <label htmlFor="name" className="label_modal labelfont">
                                    Fecha Salida:
                                </label>
                                <input
                                    id="fsalida"
                                    name="fsalida"
                                    type="date"
                                    min={disableDate}
                                    onChange={handleChangeA}
                                    onBlur={cantidadNoches}
                                    data-inputmask="'alias': 'yyyy/MM/dd'"
                                    data-mask required
                                    value={data.fsalida}
                                    className="input inputinput inputfont"
                                />
                            </div>
                        </div>

                        <div className="Container_info__hab">
    
                            <div className="containerc_li containerc_vc">
                                <label htmlFor="name" className="label_modal ">
                                    Noches:
                                </label>
                                <input
                                    id='cantidadNoches'
                                    name='cantidadNoches'
                                    type='number'
                                    value={data.cantidadNoches}
                                    onChange={handleChangeA}
                                    className="input inputinput inputfont"
                                />
                            </div>
    
                            <div className="containerc_li containerc_vc con_fec">
                                <label htmlFor="name" className="label_modal ">
                                    Total Reserva:
                                </label>
                                <input
                                    id='totalreserva'
                                    name='totalreserva'
                                    type='text'
                                    placeholder='$'
                                    onChange={handleChangeA}
                                    value={data.totalreserva}
                                    className="input inputinput inputfont"
                                    disabled
                                />
                            </div>
                        </div>
                    </div>
    
                </ModalReserva>
        </>
    );
}

export default CardHabitacionesUsuario;