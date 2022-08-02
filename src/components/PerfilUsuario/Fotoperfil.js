import React from 'react';
import axios from "axios";
import './Fotoperfil.css';
import { useState} from "react";
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../Modal/Modal';
import Swal from 'sweetalert2';

const Imageperfil = ({foto,descf,estadof,nombref,estado,
    cambiarEstado,}) => {

    const url = "https://hoteliakuepag7.herokuapp.com/users/1234567890";

    const [estadoModalDatosF, cambiarEstadoDatosF] = useState(false);
    const [dataModal,setDataModal]=useState({});

    const handleChangeModal=({target})=>{ //tarteg permite generar un nuevo evento
        setDataModal({...dataModal,[target.name]:target.value
        });
    }
    
    //5. Agregar una constante para actualiaar el estado del modal 
    const [show,setShow]=useState(false);

    const handleClose=()=>{setShow(false);}

    const [upList, setUplist] =useState([false]); 

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await axios.put(`${url}`,dataModal,{headers: {'Content-Type':'multipart/form-data'}});
        console.log(response);
        if(dataModal.img!=null){
            const validar="hola"
            console.log(validar)
            console.log(dataModal.img);
            Swal.fire(
                '¡Cambios Guardados!',
                `Los datos de contacto han sido actualizados`,
                'success'
            )
            handleClose();
            setUplist(!upList);
        }else{
            const validar="chao"
            console.log(validar)
            Swal.fire(
                '¡Error!',
                'Hubo un problema al editar los datos de contacto',
                'error'
                )
        }
        
    }

    return (
        <>
        <div className='container_img'>
            <img src={foto} alt={descf} className='img_perfil'/>
            <button type="submit" className='hover_img' onClick={() => cambiarEstadoDatosF(!estadoModalDatosF)}>Cambiar Foto<FontAwesomeIcon icon={faPenToSquare} className="icon" /></button>
        </div>


            <Modal
                onSubmit={handleSubmit}
                estado={estadoModalDatosF}
                cambiarEstado={cambiarEstadoDatosF}
                title="FOTO DE PERFIL"
                textbb={"Volver"}
                textbo={"Guardar"}
            >
                <div>
                    <div className='Container_img'>
                    <label htmlFor="img" className="label_img">Cargar Imagen</label>
                    <input
                    id="img"
                    name="img"
                    type="file" 
                    value={dataModal.img}
                    onChange={handleChangeModal}
                    className="input_img"
                    />
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default Imageperfil;