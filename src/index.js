import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

import Home from './pages/home/Home';
import HabitacionesAdmin from './pages/HabitacionesAdmin/HabitacionesAdmin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='HabAdmin' element={<HabitacionesAdmin/>}></Route>
    </Routes>
    </BrowserRouter>
);


