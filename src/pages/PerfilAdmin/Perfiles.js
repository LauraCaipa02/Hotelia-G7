import React, { Component } from 'react';
import axios from 'axios';
import {useState,useEffect } from 'react';
import InfoUserA from '../../components/PerfilUsuario/PerfilUsuario';
import Title from '../../components/Titles/Titles';
import Navdash from '../../components/navbar/Navbardash';
import Headerdash from '../../components/header/Headerdash';
import Footerdash from '../../components/Footer/Footerdash';

function PerfilesUsuario(){

    return(
        <section className="informacion">
            <Headerdash/>
            <Navdash />
            <div>
                <Title nombre="PERFIL USUARIO"/>
                <InfoUserA/>
            </div>
            <Footerdash/>
        </section>
    )
}

export default PerfilesUsuario;