import React from 'react';
import './Titles.css';

const Title=({nombre})=>{
    return(
        <h1 className='title'>{nombre}</h1>
    );
}

export default Title;