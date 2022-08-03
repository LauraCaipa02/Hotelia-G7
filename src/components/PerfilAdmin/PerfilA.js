import axios from "axios";
import React from 'react';
import Swal from 'sweetalert2';
import "./Perfil.css";
import { useState, useEffect } from "react";
import ImageperfilA from "./FotoperfilA";
import Boton from "../Botones/Botones";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal/Modal";

function InfoA() {
    const [estadoModalDatos, cambiarEstadoDatos] = useState(false);
    const [estadoModalDatosC, cambiarEstadoDatosC] = useState(false);

    //1.Definir url del api a la que me va a conectar
    const url = "https://hoteliakuepag7.herokuapp.com/users/1234567890";

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
    const [show,setShow]=useState(false);

    const handleClose=()=>{setShow(false);}
    const handleOpen=()=>{setShow(true);}

    const [dataModal,setDataModal]=useState({});

    const handleChangeModal=({target})=>{ //tarteg permite generar un nuevo evento
        setDataModal({...dataModal,[target.name]:target.value
        });
    }
    //console.log(dataModal);

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
    console.log('Hola');

    return (
        <main className="maininfo">
            <div className="container_pandi">
                <ImageperfilA 
                foto={`https://hoteliakuepag7.herokuapp.com${list.img}`} 
                descf={"susana"}
                estadof={dataModal.img}
                />

                <div className="container_info" key={list._id}>
                    <div className="container">
                        <div className="label">Tipo de Documento de identidad</div>
                        <div className="input">{list.tipodoc}</div>
                    </div>

                    <div className="container">
                        <div className="label">Número de Documento de identidad</div>
                        <div className="input ">{list._id}</div>
                    </div>

                    <div className="container">
                        <div className="label">Fecha De Nacimiento</div>
                        <div className="input">{list.fnacimiento}</div>
                    </div>

                    <div className="container">
                        <div className="label">Nombre Completo</div>
                        <div className="input">
                            {list.nombre} {list.apellido}
                        </div>
                    </div>

                    <div className="container">
                        <div className="label">Género</div>
                        <div className="input">{list.genero}</div>
                    </div>

                    <div className="container">
                        <div className="label">País de Origen</div>
                        <div className="input">{list.paisorigen}</div>
                    </div>

                    <div className="container">
                        <div className="label">Teléfono</div>
                        <div className="input">{list.telefono}</div>
                    </div>

                    <div className="container">
                        <div className="label">Correo Electrónico</div>
                        <div className="input">{list.email}</div>
                    </div>

                    <div className="container">
                        <div className="label">Contraseña</div>
                        <input
                            type="password"
                            className="input inputinput"
                            value={list.password}
                            disabled
                        />
                    </div>
                </div>
            </div>

            <div className="container_btn_pu">
                <Boton
                    click={() => cambiarEstadoDatos(!estadoModalDatos)}
                    texto={"Editar Datos Contacto"}
                    icono={faPenToSquare}
                    clase={"btn_blue btn_pb"}
                />
                <Boton
                    click={() => cambiarEstadoDatosC(!estadoModalDatosC)}
                    texto={"Cambiar Contraseña"}
                    icono={faPenToSquare}
                    clase={"btn_oranje btn_po"}
                />
            </div>

            <Modal
                onSubmit={handleSubmit}
                estado={estadoModalDatos}
                cambiarEstado={cambiarEstadoDatos}
                title="DATOS DE CONTACTO"
                textbb={"Volver"}
                textbo={"Guardar"}                
            >
                <div>
                    <label htmlFor="email" className="label_modal">Correo Electrónico</label>
                    <input
                    id="email"
                    name="email"
                    type="text" 
                    placeholder={list.email}
                    value={dataModal.email}
                    onChange={handleChangeModal}
                    className="input_modal input_modals"
                    />
                </div>

                <div>
                    <label htmlFor="telefono" className="label_modal">Teléfono</label>
                    <input
                    id="telefono"
                    name="telefono"
                    type="number" 
                    placeholder={list.telefono}
                    value={dataModal.telefono}
                    onChange={handleChangeModal}
                    className="input_modal input_modals"
                    />
                </div>
            </Modal>

            <Modal
                onSubmit={handleSubmitPassword}
                estado={estadoModalDatosC}
                cambiarEstado={cambiarEstadoDatosC}
                title={"CAMBIAR CONTRASEÑA"}
                textbb={"Volver"}
                textbo={"Guardar"}    
            >
                <div  className='containerc_li'>
                    <label htmlFor="name" className="label_modal">Contraseña Actual</label>
                    <input
                    id="contraseña"
                    name="contraseña"
                    type="password" 
                    placeholder="Ingrese la contraseña actual"
                    //value={list.password}
                    onChange={handleChangeModal}
                    className="input_modal input_modals"
                    />
                </div>

                <div className='containerc_li'>
                    <label htmlFor="contraseñan" className="label_modal">Contraseña Nueva</label>
                    <input
                    id="password"
                    name="password"
                    type="password" 
                    placeholder="Ingrese una nueva contraseña"
                    value={dataModal.password}
                    onChange={handleChangeModal}
                    className="input_modal input_modals"
                    />
                </div>

                <div className='containerc_li'>
                    <label htmlFor="contraseñac" className="label_modal">Confirmar Contraseña</label>
                    <input
                    id="contraseñac"
                    name="contraseñac"
                    type="password"
                    placeholder="Confirme la nueva contraseña"
                    //value={list.password}
                    onChange={handleChangeModal}
                    className="input_modal input_modals"
                    />
                </div>
            </Modal>
        </main>
    );
}

export default InfoA;
