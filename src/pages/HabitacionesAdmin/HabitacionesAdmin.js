import axios from 'axios';
import './HabitacionesAdmin.css';
import React, { useState, useEffect } from 'react';
import BarraDeBusquedaListHab from '../../components/BarraDeBusqueda/BarraDeBusquedaListHab';
import CardHabitacionesAdmin from '../../components/CardHabitacionesAdmin/CardHabitacionesAdmin';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import Title from '../../components/Titles/Titles';
import Navdashadmin from '../../components/navbar/Navbardashadmin';
import Headerdash from '../../components/header/Headerdash';
import Footerdash from '../../components/Footer/Footerdash';
import Modal from "../../components/Modal/Modal";


function ListadoHabitacionesAdmin() {
  const [estadoModalDatos, cambiarEstadoDatos] = useState(false);

  const URL = "https://hoteliakuepag7.herokuapp.com/habitaciones"

  const getData = async () => {
    const response = axios.get(URL);
    return response;
  }

  const [list, setList] = useState([])
  const [updateList, setUpdateList] = useState(false)
  ///////////////////////////////////////// PARA EL MODAL DEL ESTADO//////////////////////////

  let navigatecard = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [dataModalb, setDataModalb] = useState({})


  const handleCloseModal = () => { cambiarEstadoDatos(!estadoModalDatos) }
  const handleOpenModal = () => { cambiarEstadoDatos(!estadoModalDatos) }
  
  useEffect(() => {
    getData().then((response) => {
      setList(response.data);
    }
    )
  }, [])


  const handleChangeModal = ({target}) => {
    setDataModalb({
        ...dataModalb,
        [target.name]: target.value
    })
}


const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await axios.put(`${URL}/${dataModalb._id}`, dataModalb)
  if (response.status === 200) {
      Swal.fire(
          'Guardado!',
          'Se guardo el Cambio con Exito',
          'success'
      )
      handleCloseModal();
      setUpdateList(!updateList)
      navigatecard("/admin/habitaciones")
  }else {
      Swal.fire(
          'Error!',
          'Hubo un problema al actualizar el registro!',
          'error'
      )
  }
}
///////////////////////////////////////////////////////////////



  return (
    <div >
      <Headerdash/>
      <Navdashadmin />
      <div>
        <BarraDeBusquedaListHab />
        <Title nombre="HABITACIONES"/>
        {
          list.map((habitacion, index) =>
            <CardHabitacionesAdmin
              key={index}
              habitacion={habitacion}
              updateList={updateList}
              setUpdateList={setUpdateList}
              handleCloseModal={handleCloseModal}
              handleOpenModal={handleOpenModal}
              setDataModalb= {setDataModalb}
            />)
        }

      </div>
      <Footerdash/>

      <Modal
                onSubmit={handleSubmit}
                estado={estadoModalDatos}
                cambiarEstado={cambiarEstadoDatos}
                title="ACTUALIZAR ESTADO"
                textbb={"Volver"}
                textbo={"Guardar"} 
                // show={showModal} onHide={handleCloseModal}               
      >
                <select
                  className="form-control"
                  name="estado"
                  onChange={handleChangeModal}
                  required
                >
                  <option value={dataModalb.estado}>{dataModalb.estado}</option>
                  <option value="Disponible">Disponible</option>
                  <option value="No Disponible">No disponible</option>
                </select>
      </Modal>
    </div>
  );
}

export default ListadoHabitacionesAdmin;