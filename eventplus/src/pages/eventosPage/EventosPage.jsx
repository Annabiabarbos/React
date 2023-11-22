import React, { Fragment, useEffect, useState } from "react";
import "./EventosPage.css";
import Titulo from "../../components/Titulo/Titulo";
import MainContent from "../../components/MainContent/MainContent";
import Container from "../../components/Container/Container";
import ImageIllustrator from "../../components/ImageIllustrator/ImageIllustrator";
import Notification from "../../components/Notification/Notification";
import { Input, Button } from "../../components/FormComponents/FormComponents";
import Spinner from "../../components/Spinner/Spinner";
import api, { eventsResource } from "../../Services/Services";
import TipoEventoImage from "../../assets/images/evento.svg";
import TableEv from "./TableEv/TableEv";

const EventosPage = () => {
  // const [notifyUser, setNotifyUser] = useState("");
  // const [showSpinner, setShowSpinner] = useState (false)
  // const [Evento, setEvento] = useState = ("")
  // const [edit, frmEdit] = useState = (false)

  // useEffect(() => {
  //   async function loadEvents() {

  //     // setShowSpinner(true);
  //     try {
  //       const retorno = await api.get(eventsResource);
  //       setEvento(retorno.data);
  //       console.log(retorno.data);

  //     } catch (error) {
  //       console.log("Erro na api");
  //       console.log(error);
  //     }
  //     // setShowSpinner(false);
  //   }
  //   loadEvents();
  // }, [])

  return (
    <>
      {/* <Notification {} setNotifyUser={} /> */}
      {/* {showSpinner ? <Spinner /> : null} */}
      <MainContent>
        <Container>
            <div className="cadastro-evento__box">
          <Titulo titleText="Eventos" />
          <ImageIllustrator imageRender={TipoEventoImage} />
          <Input 
          id = {""}
          placeholder = {""}
          name = {""}
          type = {""}
          required = {""}
          value = {""}
          manipulationFunction = {""}
          />
          </div>
        </Container>
      </MainContent>
    </>
  );
};

export default EventosPage;
