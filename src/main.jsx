import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Accueil from "./pages/Accueil"
import AnimeApi from './pages/AnimeApi'
import Projects from './pages/Projets'


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Accueil/>}/>
      <Route path="/Interet" element={<AnimeApi/>}/>
      <Route path="/ajout-du-projet" element={<Projects/>}/>
    </Routes>
  </BrowserRouter>
</React.StrictMode>
);
  