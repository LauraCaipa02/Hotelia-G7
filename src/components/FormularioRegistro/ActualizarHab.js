<<<<<<< HEAD
import axios from 'axios';
import React, { useState, useEffect} from 'react';
import './FormularioRegistro.css';
import HeaderFormRegis from '../HeaderFormRegis/HeaderFormRegis';
import plushab from '../../assets/img/plushab.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faBook, faCirclePlus, faCamera } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate} from "react-router-dom";
import Swal from 'sweetalert2';


function ActuzalizarHab() {
    let navigate= useNavigate();
    let navigateOne= useNavigate();

    const {state} = useLocation();
    const {id}  = state;
    console.log("console id "+id);
    /*editar*/


    const [data, SetData] = useState({ _id: "", nombrehab: "", estado:"", capacidad: "", camas: "", descripcion: "", wifi: "", tv: "", banio: "", cajafuerte: "", nevera: "", valornoche: "", img: "" })


    const handleChange = ({ target }) => {
        SetData({
            ...data,
            [target.name]: target.value
        })
    }

    const url = "https://hoteliakuepag7.herokuapp.com/habitaciones/"+id

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

    const cancelar = ()=>{

        Swal.fire({
            icon: 'error',
            title: 'Cancelado',
   
          })
        navigateOne("/habitaciones");
    }

    return (
        <form onSubmit={handleSubmit}>

            <div className='PrincipalFormularioRegistro'>
                <div className='AnuncioFormularioRegistro'>
                    <h2>Actuzalizar Habitaciones</h2>
                </div>
                <div className='DatosFormularioRegistro'>
                    <h3 className='TitleDatosFormularRegistro'><FontAwesomeIcon icon={faCircleInfo} className='item' />Datos Básicos de la habitación </h3>

                    <div className='data1'>
                        <label className='labelf NombreHab'>Nombre de la habitación</label>
                        <input
                            name="nombrehab"
                            required
                            type="text"
                            placeholder="Habitación Ejecutiva"
                            className='inputf InputNomhab'
                            onChange={handleChange}
                            value={data.nombrehab}
                        />
                    </div>
                    <div className='data2'>
                        <label className='labelf NumHab'>Número de la habitación</label>
                        <input
                            name="_id"
                            required
                            type="text"
                            placeholder="101"
                            className='inputf InputNumhab'
                            onChange={handleChange}
                            value={data._id}
                        />
                    </div>

                </div>

                <div className='CaracteristicasFormularioRegistro'>
                    <h3><FontAwesomeIcon icon={faBook} className='item' />Caraterísticas </h3>
                    <div className='caracteristica1'>
                        <label className='labelf'>Precio por noche*</label>
                        <input
                            className='inputf'
                            name="valornoche"
                            required
                            type="text"
                            placeholder="$200000"
                            onChange={handleChange}
                            value={data.valornoche}
                        />
                    </div>
                    <div className='caracteristica2'>
                        <label className='labelf'>Capacidad de personas*</label>
                        <select className='selectf' name="capacidad" required onChange={handleChange} value={data.capacidad}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className='caracteristica3'>
                        <label className='labelf'>Cantidad de camas*</label>
                        <select className='selectf' name="camas" id="camas" required onChange={handleChange} value={data.camas}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className='caracteristica4'>
                        <label className='labelf'>Ingrese aqui una descripción de la habitación:*</label>
                        <div className='description'>
                            <textarea
                                className='textareaf'
                                name="descripcion"
                                type="text"
                                required
                                onChange={handleChange}
                                value={data.descripcion}
                                placeholder="Habitaciones individuales, con 18 m2, tienen cama individual" />
                        </div>
                    </div>
                </div>

                <div className='FotoFormularioRegistro'>
                    <h3><FontAwesomeIcon icon={faCamera} className='item' />Fotografías de la habitación </h3>
                    <div className='imagesFormularioRegistro'>
                        <img src={plushab} className='im4' alt='' />
                    </div>

                </div>
                <div className='AdicionalFormularioRegistro'>
                    <h3><FontAwesomeIcon icon={faCirclePlus} className='item' />Información adicional </h3>
                    <div className='optionsAdicionalFormularioRegistro'>
                        <div className='option1'>
                            <label className='labelf'>wi-fi</label>
                            <select className='selectf' name="wifi" onChange={handleChange} value={data.wifi}>
                                <option value="0"></option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                        </div>
                        <div className='option2'>
                            <label className='labelf'>TV</label>
                            <select className='selectf' name="tv" onChange={handleChange} value={data.tv}>
                                <option value="0"></option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <div className='option3'>
                            <label className='labelf'>Caja Fuerte</label>
                            <select className='selectf' name="cajafuerte" onChange={handleChange} value={data.cajafuerte} >
                                <option value="0"></option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className='option4'>
                            <label className='labelf'>Baño</label>
                            <select className='selectf' name="banio" onChange={handleChange} value={data.banio}>
                                <option value="0"></option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className='option5'>
                            <label className='labelf'>Nevera</label>
                            <select className='selectf' name="nevera" onChange={handleChange} value={data.nevera}>
                                <option value="0"></option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='BotonesFormularioRegistro'>
                    <button className='botonCancel' type="reset" onClick={cancelar}>Cancelar </button>
                    <button className='botonSave' type="submit">Actualizar</button>
                </div>
            </div>
        </form>
    );



}
export default ActuzalizarHab;
=======
import axios from 'axios';
import React, { useState, useEffect} from 'react';
import './FormularioRegistro.css';
import plushab from '../../assets/img/plushab.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faBook, faCirclePlus, faCamera } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate} from "react-router-dom";
import Swal from 'sweetalert2';


function ActualizarHab() {
    let navigate= useNavigate();
    let navigateOne= useNavigate();

    const {state} = useLocation();
    const id = state;
    console.log("console id "+id);
    /*editar*/


    const [data, SetData] = useState({ _id: "", nombrehab: "", estado:"", capacidad: "", camas: "", descripcion: "", wifi: "", tv: "", banio: "", cajafuerte: "", nevera: "", valornoche: "", img: "" })


    const handleChange = ({ target }) => {
        SetData({
            ...data,
            [target.name]: target.value
        })
    }

    const url = "https://hoteliakuepag7.herokuapp.com/habitaciones/"+id

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
            
            navigate("/habiadmin");
        } else {
            Swal.fire(
                'No se pudo registrar la habitación',
                'error',
            )
        }

    }

    const cancelar = ()=>{

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
                    <h2>Actuzalizar Habitaciones</h2>
                </div>
                <div className='DatosFormularioRegistro'>
                    <h3 className='TitleDatosFormularRegistro'><FontAwesomeIcon icon={faCircleInfo} className='item' />Datos Básicos de la habitación </h3>

                    <div className='data1'>
                        <label className='labelf NombreHab'>Nombre de la habitación</label>
                        <input
                            name="nombrehab"
                            required
                            type="text"
                            placeholder="Habitación Ejecutiva"
                            className='inputf InputNomhab'
                            onChange={handleChange}
                            value={data.nombrehab}
                        />
                    </div>
                    <div className='data2'>
                        <label className='labelf NumHab'>Número de la habitación</label>
                        <input
                            name="_id"
                            required
                            type="text"
                            placeholder="101"
                            className='inputf InputNumhab'
                            onChange={handleChange}
                            value={data._id}
                        />
                    </div>

                </div>

                <div className='CaracteristicasFormularioRegistro'>
                    <h3><FontAwesomeIcon icon={faBook} className='item' />Caraterísticas </h3>
                    <div className='caracteristica1'>
                        <label className='labelf'>Precio por noche*</label>
                        <input
                            className='inputf'
                            name="valornoche"
                            required
                            type="text"
                            placeholder="$200000"
                            onChange={handleChange}
                            value={data.valornoche}
                        />
                    </div>
                    <div className='caracteristica2'>
                        <label className='labelf'>Capacidad de personas*</label>
                        <select className='selectf' name="capacidad" required onChange={handleChange} value={data.capacidad}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className='caracteristica3'>
                        <label className='labelf'>Cantidad de camas*</label>
                        <select className='selectf' name="camas" id="camas" required onChange={handleChange} value={data.camas}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className='caracteristica4'>
                        <label className='labelf'>Ingrese aqui una descripción de la habitación:*</label>
                        <div className='description'>
                            <textarea
                                className='textareaf'
                                name="descripcion"
                                type="text"
                                required
                                onChange={handleChange}
                                value={data.descripcion}
                                placeholder="Habitaciones individuales, con 18 m2, tienen cama individual" />
                        </div>
                    </div>
                </div>

                <div className='FotoFormularioRegistro'>
                    <h3><FontAwesomeIcon icon={faCamera} className='item' />Fotografías de la habitación </h3>
                    <div className='imagesFormularioRegistro'>
                        <img src={plushab} className='im4' alt='' />
                    </div>

                </div>
                <div className='AdicionalFormularioRegistro'>
                    <h3><FontAwesomeIcon icon={faCirclePlus} className='item' />Información adicional </h3>
                    <div className='optionsAdicionalFormularioRegistro'>
                        <div className='option1'>
                            <label className='labelf'>wi-fi</label>
                            <select className='selectf' name="wifi" onChange={handleChange} value={data.wifi}>
                                <option value="0"></option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                        </div>
                        <div className='option2'>
                            <label className='labelf'>TV</label>
                            <select className='selectf' name="tv" onChange={handleChange} value={data.tv}>
                                <option value="0"></option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <div className='option3'>
                            <label className='labelf'>Caja Fuerte</label>
                            <select className='selectf' name="cajafuerte" onChange={handleChange} value={data.cajafuerte} >
                                <option value="0"></option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className='option4'>
                            <label className='labelf'>Baño</label>
                            <select className='selectf' name="banio" onChange={handleChange} value={data.banio}>
                                <option value="0"></option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className='option5'>
                            <label className='labelf'>Nevera</label>
                            <select className='selectf' name="nevera" onChange={handleChange} value={data.nevera}>
                                <option value="0"></option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='BotonesFormularioRegistro'>
                    <button className='botonCancel' type="reset" onClick={cancelar}>Cancelar </button>
                    <button className='botonSave' type="submit">Actualizar</button>
                </div>
            </div>
        </form>
    );



}
export default ActualizarHab;
>>>>>>> 1731a9526bac1f49b6866b8ca29580d252347250
