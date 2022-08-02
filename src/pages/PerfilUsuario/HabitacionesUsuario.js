import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import CardHabitacionesUsuario from '../../components/CardHabitacionesAdmin/CardHabitacionesUsuario'
import Title from '../../components/Titles/Titles';
import Navdash from '../../components/navbar/Navbardash';
import Headerdash from '../../components/header/Headerdash';
import Footerdash from '../../components/Footer/Footerdash';
import BarraDeBusquedaListHab from '../../components/BarraDeBusqueda/BarraDeBusquedaListHab'

function HabitacionesUsuario(){

    //1.Definir url del api a la que me va a conectar
    const url = "https://hoteliakuepag7.herokuapp.com/habitaciones";

    //2. Generar función asincrona
    const getData = async () => {
        const response = axios.get(url);
        return response;
    };

    //3. UseState para guardar la respuesta de la petición

    const [list, setList] = useState([]);

    //4.Crear otro estado para refrescar el listado después de eliminar
    const [upList, setUplist] = useState([false]);

    //6. Hook useEffect ejecuta funciones cada vez que renderizamos un componente.
    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
        });
    }, [upList]); //Se actualiza el listado cada vez que cambie el estado up List
    console.log(list);

    return(
        <section className="informacion">
            <Headerdash/>
            <Navdash />
            <div>
                <Title nombre="HABITACIONES"/>
                <BarraDeBusquedaListHab/>
                
            </div>
            {
                list.map((es,index)=>(
                    <CardHabitacionesUsuario 
                    key={index}
                    rooms={es} 
                    setUplist ={setUplist} 
                    upList={upList}
                    />
                ))
            }
            <Footerdash/>
        </section>
    )
}

export default HabitacionesUsuario;