import React , { useState,useEffect }from 'react';
import {CardAdmin} from '../../components/CardsReserva/ReservaAdmin';
import Title from '../../components/Titles/Titles';
import Navdashadmin from '../../components/navbar/Navbardashadmin';
import Headerdash from '../../components/header/Headerdash';
import Footerdash from '../../components/Footer/Footerdash';
import axios from "axios";
import Swal from 'sweetalert2';

function ReservaAdmin(){
    const url = "https://hoteliakuepa.herokuapp.com/reservas";
    
    const getData = async () => {
        const response = axios.get(url);
        return response;
    };
    
    const [list, setList] = useState([]);
    
    const [upList, setUplist] =useState([false]); 
    
    const [shows,setShows]=useState(false);
    
    const handleClose=()=>{setShows(false);}
    const handleOpen=()=>{setShows(true);}
    
    const [dataModal,setDataModal]=useState({});
    
    const handleChangeModal=({target})=>{ //tarteg permite generar un nuevo evento
        setDataModal({...dataModal,[target.name]:target.value
        });
    }
    console.log(dataModal);
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await axios.put(`${url}`,dataModal);
        console.log(response);
        if(response.status===200){
            Swal.fire(
                '¡Cambios Guardados!',
                `Los datos de contacto han sido actualizados`,
                'success'
            )
            handleClose();
            setUplist(!upList);
        }else{
            Swal.fire(
                '¡Error!',
                'Hubo un problema al editar los datos de contacto',
                'error'
            )
        }
    }

    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
        });
    }, []); //Se actualiza el listado cada vez que cambie el estado up List
    console.log(list);

    return(
        <section className="informacion">
            <Headerdash/>
            <Navdashadmin />
            <div>
                <Title nombre="Reservas"/>
                {
                list.map((es,index)=>(
                    <CardAdmin 
                    key={index}
                    booking={es} 
                    setUplist ={setUplist} 
                    upList={upList}
                    />
                ))
                }
            </div>
            <Footerdash/>
        </section>
    )
}

export default ReservaAdmin;