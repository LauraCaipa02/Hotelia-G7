import axios from 'axios';
import React, { useState } from 'react';
import '../FormularioRegistro/FormularioRegistro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faBook, faCirclePlus, faCamera } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
function FormularioReserva() {

    let navigate = useNavigate();
    let navigateOne = useNavigate();

    const { state } = useLocation();
    const id = state;
    console.log("console id " + id);
    /*editar*/


    const [data, SetData] = useState({ _id: "", estado: "" })

    const handleChange = ({ target }) => {
        SetData({
            ...data,
            [target.name]: target.value
        })
    }

    const url = "https://hoteliakuepag7.herokuapp.com/habitaciones/" + id

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.put(url, data);
        console.log(response)

        if (response.status === 200) {

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `La habitación <strong> ${data._id}</strong> ha sido guardada exitosamente!`,
                showConfirmButton: false,
                timer: 1500
            })

            navigate("/HabAdmin");
        } else {
            Swal.fire(
                'No se pudo registrar la habitación',
                'error',
            )
        }

    }

    const cancelar = () => {

        Swal.fire({
            icon: 'error',
            title: 'Cancelado',

        })
        navigateOne("/");
    }


    return (
        <form onSubmit={handleSubmit}>

            <div className='PrincipalFormularioRegistro'>
                <div className='AnuncioFormularioRegistro'>
                    <h2>Cambio de estado </h2>
                </div>
                <div className='DatosFormularioRegistro'>

                    <div className='data1'>
                        <label className='labelf NombreHab'>Estado</label>
                        <select className='inputf InputNomhab' name="fentrada" onChange={handleChange} value={data.estado}>
                            <option value="0"></option>
                            <option value="1">Disponible</option>
                            <option value="2">No Disponible</option>
                        </select>

                    </div>

                </div>
                <div className='BotonesFormularioRegistro'>
                    <button className='botonCancel' onClick= {cancelar} > Cancelar </button>
                    <button className='botonSave' type="submit">Cambiar</button>
                </div>
            </div>
        </form>
    );



}

export default FormularioReserva;