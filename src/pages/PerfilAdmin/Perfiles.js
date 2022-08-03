import React from 'react';
import InfoA from '../../components/PerfilAdmin/PerfilA';
import Title from '../../components/Titles/Titles';
import Navdashadmin from '../../components/navbar/Navbardashadmin';
import Headerdash from '../../components/header/Headerdash';
import Footerdash from '../../components/Footer/Footerdash';

function PerfilesUsuario(){

    return(
        <section className="informacion">
            <Headerdash/>
            <Navdashadmin />
            <div>
                <Title nombre="PERFIL USUARIO"/>
                <InfoA/>
            </div>
            <Footerdash/>
        </section>
    )
}

export default PerfilesUsuario;