import React from 'react';
import './FormularioRegistro.css';
import HeaderFormRegis from '../../elementos/HeaderFormRegis/HeaderFormRegis';
import hab1 from '../../img/hab1.png'
import bed1 from '../../img/bed1.png';
import plushab from '../../img/plushab.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faBook, faCirclePlus, faCamera } from '@fortawesome/free-solid-svg-icons';

function FormularioRegistro() {
    return (
        <div>
            <HeaderFormRegis />
            <div className='PrincipalFormularioRegistro'>
                <div className='AnuncioFormularioRegistro'>
                    <h2>En este formulario podrás ingresar las habitaciones y su características</h2>
                </div>
                <div className='DatosFormularioRegistro'>
                    <h3 className='TitleDatosFormularRegistro'><FontAwesomeIcon icon={faCircleInfo} className='item' />Datos Básicos de la habitación </h3>
                    
                    <div className='data1'>
                        <label className='labelf NombreHab'>Nombre de la habitación</label>     
                        <input name="nombre" id="nombre" type="text" placeholder="Habitación Ejecutiva" className='inputf InputNomhab' />
                    </div>
                    <div className='data2'>    
                        <label className='labelf NumHab'>Número de la habitación</label>
                        <input  name="nombre" id="nombre" type="text" placeholder="101" className='inputf InputNumhab' />
                    </div>

                </div>

                <div className='CaracteristicasFormularioRegistro'>
                    <h3><FontAwesomeIcon icon={faBook} className='item' />Caraterísticas </h3>
                    <div className='caracteristica1'>
                        <label className='labelf'>Precio por noche*</label>
                        <input className='inputf' name="nombre" id="nombre" type="text" placeholder="$200000" />
                    </div>
                    <div className='caracteristica2'>
                        <label className='labelf'>Capacidad de personas*</label>
                        <select className='selectf' name="personas" id="personas">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        </select>
                    </div>
                    <div className='caracteristica3'>    
                        <label className='labelf'>Cantidad de camas*</label>
                        <select className='selectf' name="camas" id="camas">
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
                            <input className='inputf' name="descipcion" id="descripcion" type="text" placeholder="Habitaciones individuales, con 18 m2, tienen cama individual, baño en mármol con bañera y vistas a la villa de Estoril. Además, le reciben con una bebida de bienvenida" />
                        </div>
                    </div>
                </div>
                
                <div className='FotoFormularioRegistro'>
                    <h3><FontAwesomeIcon icon={faCamera} className='item' />Fotografías de la habitación </h3>
                    <div className='imagesFormularioRegistro'>
                        <img src={hab1} className='im1' alt=''/>
                        <img src={bed1} className='im2' alt=''/>
                        <img src={bed1} className='im3' alt=''/>
                        <img src={plushab} className='im4' alt=''/>
                    </div>

                </div>
                <div className='AdicionalFormularioRegistro'>
                    <h3><FontAwesomeIcon icon={faCirclePlus} className='item' />Información adicional </h3>
                    <div className='optionsAdicionalFormularioRegistro'>
                        <div className='option1'>
                            <label className='labelf'>wi-fi</label>
                            <select className='selectf' name="wifi" id="wifi">
                                <option value="0"></option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                        </div>
                        <div className='option2'>
                            <label className='labelf'>TV</label>
                            <select className='selectf' name="tv" id="tv">
                                <option value="0"></option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                        </div>

                        <div className='option3'>
                            <label className='labelf'>Caja Fuerte</label>
                            <select className='selectf' name="box" id="box">
                            <option value="0"></option>
                            <option value="1">Si</option>
                            <option value="2">No</option>
                            </select>
                        </div>
                        <div className='option4'>
                            <label className='labelf'>Baño</label>
                            <select className='selectf' name="wc" id="wc">
                                <option value="0"></option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                        </div>
                        <div className='option5'>
                            <label className='labelf'>Nevera</label>
                            <select className='selectf' name="nevera" id="nevera">
                                <option value="0"></option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='BotonesFormularioRegistro'>
                    <button className='botonCancel'>Cancelar</button>
                    <button className='botonSave'>Guardar</button>
                </div>
            </div>
        </div>
    );



}

export default FormularioRegistro;