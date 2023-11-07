import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import EventosPage from "./pages/EventosPage/EventosPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import TiposEventosPage from "./pages/TiposEventoPage/TiposEvento";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import TestePage from "./pages/TestePage/TestePage.jsx";


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
      <Footer />
    </BrowserRouter>
  );
};

export default Rotas;
