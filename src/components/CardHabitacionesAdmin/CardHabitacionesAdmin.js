import "./CardHabitacionesAdmin.css";
import "../PerfilUsuario/Perfil.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ModalReserva from "../Modal/ModalReserva";
import { Navigate } from 'react-router-dom';

const CardHabitacionesAdmin = ({ habitacion, handleCloseModal, handleOpenModal,  setDataModalb  }) => {
    const [estadoModalReserva, cambiarEstadoReserva] = useState(false);
    const [data, setDataModal] = useState({ 
        fentrada: "", 
        fsalida: "", 
        cantidadNoches: "", 
        totalreserva: "", 
        userId: "", 
        habitacionId: "" });
    
        const handleChangeA = ({ target }) => {

        setDataModal({
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
    // const dates = habitacion.reservas.filter(f => f.fechaEntrada);

    const cantidadNoches = () => {
        var fechaE = new Date(document.getElementById('fentrada').value);
        var fechaS = new Date(document.getElementById('fsalida').value);
        var time = fechaS.getTime() - fechaE.getTime();
        var days = Math.floor(time / (1000 * 60 * 60 * 24));
        document.getElementById("cantidadNoches").value = days;
        var totalReserva = days * habitacion.valornoche;
        document.getElementById("totalreserva").value = totalReserva;
        data.cantidadNoches = days;
        console.log(data.cantidadNoches);
        data.totalreserva = totalReserva;
        console.log(data.totalreserva);
    }

    data.habitacionId=habitacion._id;
    

    /// para actualizar///
    let navigate = useNavigate();
    const url3 = "https://hoteliakuepag7.herokuapp.com/habitaciones"

    const editar = () => {
        setDataModalb(habitacion)
        navigate('/admin/actualizarhabitaciones', { state: { id: habitacion._id } });
    }


    //para eliminar 
    // const url2 = `https://hoteliakuepag7.herokuapp.com/${habitacion._id}`

    // const handleDelete= async() =>{
    //    console.log('eliminando', habitacion._id )
    //    axios.delete(`${url2}`)
    //    .then((response) => {
       
    //     if (response.status === 200) {
    //         Swal.fire(
    //             'Eliminado!',
    //             `Se eliminó con éxito el registro ${habitacion._id}!`,
    //             'success'
    //         )

    //     }else {
    //         Swal.fire(
    //             'Error!',
    //             'Hubo un problema al elminar el registro!',
    //             'error'
    //         )
    //     }
    //     })
    // }
    

    //cambio de estado
    const handleState= () => {
        console.log('cambiando estado   ', habitacion._id)
        handleOpenModal();
        setDataModalb(habitacion)
    }
    return (
        <>
            <div className="PrincipalCardHabitacionesAdmin">
                <div className="ImgCardHabitacionesAdmin">
                    <img src={habitacion.img} className="imgCard" alt="" />
                </div>
                <div className="NombreContenidoCardHabitacionesAdmin">
                    <h3>{habitacion.nombrehab}</h3>
                </div>
                <div className="PrecioContenidoCardHabitacionesAdmin">
                    <h3>${habitacion.valornoche} COP</h3>
                </div>
                <div className="ContenidoCardHabitacionesAdmin">
                    <div className="DescripcionContenidoCardHabitacionesAdmin">
                        <h4>Descripción:</h4>
                        <p>{habitacion.descripcion}</p>
                        <h4>Número de habitación:</h4>
                        <p>{habitacion._id}</p>
                    </div>
                    <div className="EspecificacionesContenidoCardHabitacionesAdmin">
                        <h4>Especificaciones:</h4>
                        <p>Nevera y televisión: {habitacion.tv}</p>
                        <p>Caja fuerte: {habitacion.cajafuerte}</p>
                        <p>Baño privado: {habitacion.banio}</p>
                    </div>
                    <div className="EstadoContenidoCardHabitacionesAdmin">
                        <h4>Estado:</h4>
                        <p>{habitacion.estado}</p>
                    </div>
                </div>
                <div className="BotonesCardHabitacionesAdmin">
                    <button
                        className="botonReservar"
                        onClick={() => cambiarEstadoReserva(!estadoModalReserva)}
                    >
                        Reservar
                    </button>
                    <button className='botonEditar' onClick={editar} > Editar </button>
                    <button className='botonEstado' onClick={handleState}>Estado </button>
                    {/* <button className='botonDelete' onClick={handleDelete}> Eliminar </button> */}
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
                                    placeholder="Ingrese el número de documento"
                                    value={data.habitacionId}
                                    //onChange={handleChangeA}
                                    max="10"
                                    className="input inputinput inputfont"
                                    disabled
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
                                    disabled
                                />
                            </div>
    
                            <div className="containerc_li containerc_name con_fec">
                                <label htmlFor="name" className="label_modal ">
                                    Total Reserva:
                                </label>
                                <input
                                    id='totalreserva'
                                    name='totalreserva'
                                    type='text'
                                    placeholder=''
                                    onChange={handleChangeA}
                                    value={`$${data.totalreserva}COP`}
                                    className="input inputinput inputfont"
                                    disabled
                                />
                            </div>
                        </div>
    
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
                                    placeholder="Ingrese el número de documento"
                                    value={data.userId}
                                    onChange={handleChangeA}
                                    className="input inputinput "
                                />
                            </div>
                        </div>
                    </div>
    
                    
            </ModalReserva>
        </>
    );
};

export default CardHabitacionesAdmin;
