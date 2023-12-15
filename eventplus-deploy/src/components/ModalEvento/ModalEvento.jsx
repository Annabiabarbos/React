import React, { useState } from "react";
import "./ModalEvento.css";
import Title from "../Title/Title";
import Notification from "../Notification/Notification";
import "../../pages/TipoEventosPage/TipoEventosPage.css";
import api, { commentaryEventResource } from "../../Services/Service";
import NextEvent from "../NextEvent/NextEvent";
import ModalTableEv from "./ModalTableEv/ModalTableEv";

const ModalEvento = ({
  modalTitle = "Sobre o Evento",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cupiditate cum provident odit rerum, reiciendis odio",
  moreInformations = "Mais Informações",
  eventName = "",
  eventTeacher = "",
  eventDate = "",
  eventPlace = "",
}) => {
  /*const [nomeEvento, setNomeEvento] = 
  const [dataEvento, setDataEvento] = 
  const [lugar, setEvento] = 
  const [professorEvento, setProfessorEvento] = */
  const [Showpinner, setShowSpinner] = useState("");
  const [Notify, setNotifyUser] = useState("");
  const [comentarios, setComentarios] = useState("");

  function handleSubmit() {
    try {
    } catch (error) {}
  }

  return (
    <>
      <div className="event--modal">
        <a className="event--modal__close" href={"/"}>
          X
        </a>

        {/*Nome do evento*/}
        <h1 className="event--modal__title">{modalTitle}</h1>

        {/*Linha abaixo do titulo*/}
        <hr className="event--modal__line" />

        {/*Pular linha */}
        <br />

        {/*Descricao do evento */}
        <p className="event--modal__description">{description}</p>

        <br />

        <h2 className="event--modal__more-informations">{moreInformations}</h2>
        {/* <hr className="event--modal__informations-line" /> */}
        <br />

        <div>
          <p>Nome do Evento:</p>
          {/* <hr className="event--modal__description-line"/> */}
          <span>{eventName}</span>

          <br />

          <p>Professor do Evento:</p>
          <span>{eventTeacher}</span>
          {/* <hr className="event--modal__description-line"/> */}

          <br />

          <p>Data e hora:</p>
          <span>{eventDate}</span>
          {/* <hr className="event--modal__description-line"/> */}

          <br />

          <p>Local do Evento:</p>
          <span>{eventPlace}</span>
          {/* <hr className="event--modal__description-line"/> */}

          <br />

          <button
            id="cadastrar"
            name="cadastrar"
            type="submit"
            class="button-component undefined"
            onClick={handleSubmit}
          >
            Cadastrar
          </button>

          <ModalTableEv />

          {/* <button id="conectar" name="conectar" type="submit" className="event--modal__button">Conectar</button> */}
        </div>
      </div>
    </>
  );
};

export default ModalEvento;
