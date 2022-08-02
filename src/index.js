import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import PerfilUsuario from './pages/PerfilUsuario/Perfil';
import ReservaUsuario from './pages/PerfilUsuario/Reserva';
//import FormularioRegistro from './components/FormularioRegistro/FormularioRegistro';
import ReservaAdmin from './pages/PerfilAdmin/Reserva';
import HabitacionesAdmin from './pages/PerfilAdmin/HabitacionesAdmin.js';
import PerfilesUsuario from './pages/PerfilAdmin/Perfiles';
import HabitacionesUsuario from './pages/PerfilUsuario/HabitacionesUsuario';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />} />
      <Route path='/perfil' element={<PerfilUsuario />}></Route>
      <Route path='/reservas' element={<ReservaUsuario />}></Route>
      {/* <Route path='/admin/registro-habitacion' element={<FormularioRegistro />}></Route> */}
      <Route path='/admin/reservas' element={<ReservaAdmin />}></Route>
      <Route path='/admin/perfil' element={<PerfilesUsuario />}></Route>
      <Route path='/admin/habitaciones' element={<HabitacionesAdmin />}></Route>
      <Route path='/habitaciones' element={<HabitacionesUsuario />}></Route>
    </Routes>
    </BrowserRouter>
);

