import React, { useState } from "react";
import "./Header.css";

import Container from "../container/Container";
import Nav from "../nav/Nav";
import PerfilUsuario from "../perfilUsuario/PerfilUsuario";

import menubar from "../../assets/images/menubar.png";


const Header = () => {

  const [exibeNavbar, setExibeNavbar] = useState(false); //exibe e esconde o menu

  return (
    <header className="headerpage">
      <Container>
        <div className="header-flex">
          <img
            src={menubar}
            alt="Imagem menu de barras. Serve para exibir ou esconder o menu no mobile"
            onClick={() => {setExibeNavbar(true)}}
            className="headerpage__menubar"
          />

          <Nav exibeNavbar = {exibeNavbar} setExibeNavbar = {setExibeNavbar}/>
          <PerfilUsuario />
        </div>
      </Container>
    </header>
  );
};

export default Header;

/*<a href="">Home</a>
 <a href="">Tipos Evento</a>
 <a href="">Eventos</a>
 <a href=""></a> 
 */
