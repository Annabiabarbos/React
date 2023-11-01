import React from "react";
import "./Header.css";

import Container from "../container/Container";
import Nav from "../nav/Nav";
import PerfilUsuario from "../perfilUsuario/PerfilUsuario";

import menubar from "../../assets/images/menubar.png";


const Header = () => {
  return (
    <header className="header-page">
      <Container>
        <div className="header-flex">
          <img
            src={menubar}
            alt="Imagem menu de barras. Serve para exibir ou esconder o menu no mobile"
          />

          <Nav />
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
