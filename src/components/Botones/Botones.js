import React from 'react';
import './Botones.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Boton= ({texto,clase,icono,click}) => {
    return (
    <button onClick={click} className={clase}><FontAwesomeIcon icon={icono} className="icon_btn" />{texto}</button>
        
    );
}

export default Boton;