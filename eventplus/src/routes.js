import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";

import EventosPage from "./pages/eventosPage/EventosPage.jsx";
import HomePage from "./pages/homePage/HomePage.jsx";
import TiposEventosPage from "./pages/tiposEventoPage/TiposEvento";
import LoginPage from "./pages/loginPage/LoginPage.jsx";
import TestePage from "./pages/testePage/TestePage.jsx";


const Rotas = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/eventos" element={<EventosPage />}  exact/>
        <Route path="/home" element={<HomePage />} />
        <Route path="/tipos-evento" element={<TiposEventosPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/teste" element={<TestePage />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
