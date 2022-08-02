import React from 'react';
import './Botones.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Boton= ({texto,clase,icono,click,type}) => {
    return (
    <button onClick={click} className={clase}><FontAwesomeIcon icon={icono} className="icon_btn" type={type}/>{texto}</button>
        
    );
}

export default Boton;