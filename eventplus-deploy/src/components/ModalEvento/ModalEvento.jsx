import React, { useState } from "react";
import "./ModalEvento.css";
import Title from "../Title/Title";


const ModalEvento = ({
  modalTitle = "Sobre o Evento",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rerum sed, dignissimos illum cum quibusdam non voluptates autem ipsam corrupti aut, nesciunt maxime. Quidem neque doloribus iusto ratione cumque dolorem",
  moreInformations = "Mais informações",
  eventName ="",
  eventTeacher ="",
  eventDate = "",
  eventPlace = "",
}) => {
  /*const [nomeEvento, setNomeEvento] = 
  const [dataEvento, setDataEvento] = 
  const [lugar, setEvento] = 
  const [professorEvento, setProfessorEvento] = */

  return (
    <div className="event--modal">
      {/*Nome do evento*/}
      <h1 className="event--modal__title">{modalTitle}</h1>

      {/*Linha abaixo do titulo*/}
      <hr />

      {/*Pular linha */}
      <br />

      
        {/*Descricao do evento */}
        <p>{description}</p>

      <div>
        <h2>{moreInformations}</h2>

        <p>Nome do Evento</p>
        <span>{eventName}</span>

        <p>professor do Evento</p>
        <span>{eventTeacher}</span>

        <p>Data e hora </p>
        <span>{eventDate}</span>

        <p>Local do Evento</p>
        <span>{eventPlace}</span>

        <button textButton="Conectar" />
      </div>
    </div>
  );
};

export default ModalEvento;
