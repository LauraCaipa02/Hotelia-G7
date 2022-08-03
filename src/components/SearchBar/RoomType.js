import React from "react";
import RoomHome from '../../assets/grid/room1.png'
import './searchroom.css';

function RoomType(){
    return(
        <main>
            <h2 className="room-title">TIPOS DE HABITACIONES</h2>
            <div className='room-type'>
            <img src={RoomHome} alt='habitacion' className="room-img"/>
            <p>Habitaciones desde 10 hasta 20 m2 en acomodación sencilla, doble o múltiple</p></div>
        </main>
    )
}
export default RoomType;