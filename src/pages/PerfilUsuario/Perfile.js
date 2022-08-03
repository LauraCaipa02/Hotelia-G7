import React from 'react';
import Infoe from '../../components/PerfilUsuario/Perfile';
import Title from '../../components/Titles/Titles';
import Navdash from '../../components/navbar/Navbardash';
import Headerdash from '../../components/header/Headerdash';
import Footerdash from '../../components/Footer/Footerdash';

function PerfilUsuarioe(){

    return(
        <section className="informacion">
            <Headerdash/>
            <Navdash />
            <div>
                <Title nombre="PERFIL USUARIO"/>
                <Infoe/>
            </div>
            <Footerdash/>
        </section>
    )
}

export default PerfilUsuarioe;