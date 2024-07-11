import React from 'react'
import ReactDOM from "react-dom/client";

import Home from "./pages/home";

import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import Regaster from './components/regaster';
import Login from './components/login';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/regaster' element={<Regaster/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
