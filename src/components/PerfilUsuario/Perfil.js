import React, {useState} from 'react';
import './Perfil.css';
import Imageperfil from '../../components/PerfilUsuario/Fotoperfil';
import Foto from '../../img/christina-wocintechchat-com-lFntEHwQvi4-unsplash.jpg';
import Boton from '../Botones/Botones';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'; 
import Modal from '../Modal/Modal';
import Modalc from '../Modal/Modalc';

const Info = () => {
    const [estadoModalDatos,cambiarEstadoDatos]=useState(false);
    const [estadoModalDatosC,cambiarEstadoDatosC]=useState(false);

    return (
    <main className='maininfo'>
        <Imageperfil foto={Foto} descf={"susana"}/>
        
        <div className='container_info'>
        <div className='container'>
        <div className='label'>Documento de identidad</div>
        <div className='containerd'>
        <div className='input inputp'>C.C.</div>
        <div className='input inputt'>1234363245</div>
        </div>
        </div>

        <div className='container'>
        <div className='label'>Fecha De Nacimiento</div>
        <div className='input'>28/11/1980</div>
        </div>

        <div className='container'>
        <div className='label'>Nombre</div>
        <div className='input'>Susana</div>
        </div>

        <div className='container'>
        <div className='label'>Apellidos</div>
        <div className='input'>Pérez Pérez</div>
        </div>

        <div className='container'>
        <div className='label'>Género</div>
        <div className='input'>Femenino</div>
        </div>

        <div className='container'>
        <div className='label'>País de Origen</div>
        <div className='input'>Colombia</div>
        </div>

        <div className='container'>
        <div className='label'>Teléfono</div>
        <div className='containerd'>
        <div className='input inputp'>+57 </div>
        <div className='input inputt'>3225752321</div>
        </div>
        </div>

        <div className='container'>
        <div className='label'>Correo Electrónico</div>
        <div className='input'>Susanaperez5435@gmail.com</div>
        </div>

        <div className='container'>
        <div className='label'>Contraseña</div>
        <div className='input'>********</div>
        </div>
        </div>

        <div className='container_btn_pu'>
        <Boton click={()=>cambiarEstadoDatos(!estadoModalDatos) } texto={"Editar Datos Contacto"} icono={faPenToSquare} clase={"btn_blue"}/>
        <Boton click={()=>cambiarEstadoDatosC(!estadoModalDatosC)} texto={"Cambiar Contraseña"} icono={faPenToSquare} clase={"btn_oranje"}/>
        </div>

        <Modal 
        estado={estadoModalDatos}
        cambiarEstado={cambiarEstadoDatos}
        title="DATOS DE CONTACTO"
        name={"correo"}
        label={"Correo Electrónico"}
        tipo="text"
        
        labeltwo={"Teléfono"}
        placeholder={"Susanaperez5435@gmail.com"}
        placeholdertwo={"+57"}
        />

        <Modalc
        estado={estadoModalDatosC}
        cambiarEstado={cambiarEstadoDatosC}
        title="DATOS DE CONTACTO"
        name={"contraseña"}
        label={"Contraseña Actual"}
        tipo="password"
        placeholder={"******"}
        
        labeltwo={"Contraseña Nueva"}
        labelthree={"Confirmar Contraseña"}
        
        placeholdertwo={"+57"}
        />

    </main>
    );
}

export default Info;