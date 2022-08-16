import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import RegistroUsuario from './pages/registrouser/RegistroUsuario';
import PerfilUsuario from './pages/PerfilUsuario/Perfil';
import ReservaUsuario from './pages/PerfilUsuario/Reserva';
import ReservaAdmin from './pages/PerfilAdmin/Reserva';
import HabitacionesUsuario from './pages//PerfilUsuario/HabitacionesUsuario';
import PerfilUsuarioe from './pages/PerfilUsuario/Perfile';
import PerfilesUsuario from './pages/PerfilAdmin/Perfiles';
import HabitacionesAdmin from './pages/HabitacionesAdmin/HabitacionesAdmin';
import RegistroHab from './pages/RegistroHab/RegistroHab';
import EstadoHab from './pages/reservasAdmin/reservasAdmin';
import ActuzalizarHab from'./pages/ActuzalizarHab/ActualizarHab';
import RoomSearch from './pages/roomsearch/RoomSearch';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>

      <Route path='/login' element={<Login />} />
      <Route path='/perfil' element={<PerfilUsuario />}></Route>
      <Route path='/perfile' element={<PerfilUsuarioe />}></Route>
      <Route path='/reservas' element={<ReservaUsuario />}></Route>
      <Route path='/admin/reservas' element={<ReservaAdmin />}></Route>
      <Route path='/admin/perfil' element={<PerfilesUsuario />}></Route>
      <Route path='/habitaciones' element={<HabitacionesUsuario />}></Route>
      <Route path='/admin/habitaciones' element={<HabitacionesAdmin/>}></Route>
      <Route path='/admin/registrohabitaciones' element={<RegistroHab/>}></Route>
      <Route path='/admin/estadohabitaciones' element={<EstadoHab/>}></Route>
      <Route path='/admin/actualizarhabitaciones' element={<ActuzalizarHab/>}></Route>
      <Route path='/registro' element={<RegistroUsuario />}></Route>
      <Route path='/busqueda' element={<RoomSearch />}></Route>

    </Routes>
    </BrowserRouter>
);

