import React from "react";
import "./NextEvent.css";
import { dateFormatDbToView } from "../../Utils/stringFunctions";
import { Tooltip } from "react-tooltip";

const NextEvent = ({ title, description, eventDate, idEvent }) => {
  function conectar(idEvent) {
    alert(`chamar o recurso para conectar : ${idEvent}`);
  }
  return (
    <article className="event-card">
      <h2 className="event-card__title">{title}</h2>
      <p
        className="event-card__description"
        data-tooltip-id="my-tooltip"
        data-tooltip-content={description}
        data-tooltip-place="top"
      >
        {description.substr(0, 15)}
        <Tooltip id="my-tooltip" className="tooltip"/>
      </p>
      <p className="event-card__description">{dateFormatDbToView(eventDate)}</p>

      <a
        onclick={() => {
          conectar(idEvent);
        }}
        href=""
        className="event-card__connect-link"
      >
        Conectar
      </a>
    </article>
  );
};

export default NextEvent;
