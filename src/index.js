import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import RegistroUsuario from './pages/registrouser/RegistroUsuario';
import RoomSearch from './pages/roomsearch/RoomSearch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/registro' element={<RegistroUsuario />}></Route>
      <Route path='/busqueda' element={<RoomSearch />}></Route>
    </Routes>
    </BrowserRouter>
);


