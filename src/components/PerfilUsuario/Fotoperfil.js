import React from 'react';
import './Fotoperfil.css';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Imageperfil = ({foto,descf}) => {
    return (
        <div className='container_img'>
            <img src={foto} alt={descf} className='img_perfil'/>
            <input type="file" value="" className='input_img'/>
            <button type='submit' className='hover_img'>Cambiar Foto<FontAwesomeIcon icon={faPenToSquare} className="icon" /></button>
        </div>
    );
}

export default Imageperfil;