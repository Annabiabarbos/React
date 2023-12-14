import React, { useState } from "react";
import "./NextEvent.css";

import { Tooltip } from "react-tooltip";

// importar a função lá do arquivo stringFunction (destructuring)
import { dateFormatDbToView } from "../../Utils/stringFunctions";
import { Link } from "react-router-dom";
import api, { commentaryEventResource } from "../../Services/Service";
import ModalEvento from "../ModalEvento/ModalEvento";
import Title from "../Title/Title";

const NextEvent = ({ title, description, eventDate, idEvent }) => {


  const [showModal, setShowModal] = useState(false);
  async function conectar(idEvent, mostraModal) {
    // dá pra usar a prop idEvent? testar
    setShowModal(mostraModal)
  }

  
  return (
    <>
      <article className="event-card">
        <h2 className="event-card__title">{title}</h2>
        <p
          className="event-card__description"
          data-tooltip-id={idEvent}
          data-tooltip-content={description}
          data-tooltip-place="top"
        >
          <Tooltip id={idEvent} className="tooltip" />
          {description.substr(0, 15)} ...
        </p>

        <p className="event-card__description">
          {/* aplicar a função pra converter a data */}
          {dateFormatDbToView(eventDate)}
        </p>

        <a
          onClick={() => {
            conectar(idEvent, true);
          }}
          className="event-card__connect-link"
        >
          Detalhes ... 
        </a>
        {showModal ? <ModalEvento />  : null }
      </article>
      
    </>
  );
};

export default NextEvent;
