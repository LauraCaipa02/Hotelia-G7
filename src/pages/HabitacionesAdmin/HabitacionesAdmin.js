import axios from 'axios';
import React, {useState,useEffect} from 'react';
import BarraDeBusquedaListHab from '../../components/BarraDeBusqueda/BarraDeBusquedaListHab';
import CardHabitacionesAdmin from '../../components/CardHabitacionesAdmin/CardHabitacionesAdmin';
import Navdashadmin from '../../components/navbar/Navbardashadmin';



function ListadoHabitacionesAdmin() {
  const URL="https://hoteliakuepag7.herokuapp.com/habitaciones"

  const getData= async()=>{
      const response=axios.get(URL);
      return response;
  }

  const [list,setList] =useState([])

  useEffect(()=>{       
      getData().then((response)=>{
          setList(response.data);
      }
      )
  },[])

  return (
    <div >
      <BarraDeBusquedaListHab/>
      <Navdashadmin/>
      { 
      list.map( (habitacion,index)=>
      <CardHabitacionesAdmin
      key={index}
      habitacion={habitacion}
      />)
}
    </div>
  );
}

export default ListadoHabitacionesAdmin;