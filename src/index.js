import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import RoomSearch from './pages/roomsearch/RoomSearch';
import RegistroUsuario from './pages/registrouser/RegistroUsuario';
import PerfilUsuario from './pages/PerfilUsuario/Perfil';
import ReservaUsuario from './pages/PerfilUsuario/Reserva';
import FormularioRegistro from './components/FormularioRegistro/FormularioRegistro';
import ReservaAdmin from './pages/PerfilAdmin/Reserva';
import HabitacionesAdmin from './pages/PerfilAdmin/HabitacionesAdmin.js';
import HabitacionesUsuario from './pages//PerfilUsuario/HabitacionesUsuario';
import PerfilUsuarioe from './pages/PerfilUsuario/Perfile';
import PerfilesUsuario from './pages/PerfilAdmin/Perfiles';
import HabitacionesAdm from './pages/HabitacionesAdmin/HabitacionesAdm';
import RegistroHab from './pages/RegistroHab/RegistroHab';
import EstadoHab from './pages/reservasAdmin/reservasAdmin';
import ActRegistroHab from './pages/ActualizarHab/ActualizarHab';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>

      <Route path='/login' element={<Login />} />
      <Route path='/busqueda' element={<RoomSearch />} />
      <Route path='/perfil' element={<PerfilUsuario />}></Route>
      <Route path='/perfile' element={<PerfilUsuarioe />}></Route>
      <Route path='/reservas' element={<ReservaUsuario />}></Route>
      <Route path='/admin/registro-habitacion' element={<FormularioRegistro />}></Route>
      <Route path='/admin/reservas' element={<ReservaAdmin />}></Route>
      <Route path='/admin/perfil' element={<PerfilesUsuario />}></Route>
      <Route path='/admin/habitaciones' element={<HabitacionesAdmin />}></Route>
      <Route path='/habitaciones' element={<HabitacionesUsuario />}></Route>
      <Route path='/registro' element={<RegistroUsuario />}></Route>
      <Route path='/habiadmin' element={<HabitacionesAdm/>}></Route>
      <Route path='/registrohab' element={<RegistroHab/>}></Route>
      <Route path='/habiestado' element={<EstadoHab/>}></Route>
      <Route path='/actualizarhab' element={<ActRegistroHab/>}></Route>

    </Routes>
    </BrowserRouter>
);

