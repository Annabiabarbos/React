import React, { Fragment, useEffect, useState } from "react";
import "./EventosPage.css";
import Titulo from "../../components/Title/Title";
import MainContent from "../../components/MainContent/MainContent";
import Container from "../../components/Container/Container";
import ImageIllustrator from "../../components/ImageIllustrator/ImageIllustrator";
import Notification from "../../components/Notification/Notification";
import { Input, Button } from "../../components/FormComponents/FormComponents";
import Spinner from "../../components/Spinner/Spinner";
import api, { eventsResource } from "../../Services/Service";
import TipoEventoImage from "../../assets/images/evento.svg";
import TableEv from "./TableEv/TableEv";

const EventosPage = () => {
  const [notifyUser, setNotifyUser] = useState();
  const [showSpinner, setShowSpinner] = useState (false)
  const [evento, setEvento] = useState([]);
  const [edit, frmEdit] = useState(false);
  const [titulo, setTitulo] = useState();

  useEffect(() => {
    async function loadEvents() {
      // setShowSpinner(true);
      try {
        const retorno = await api.get(eventsResource);
        setEvento(retorno.evento);
        console.log(retorno.evento);
      } catch (error) {
        console.log("Erro na api");
        console.log(error);
      }
      // setShowSpinner(false);
    }
    loadEvents();
  }, []);

  function handleSubmit(e) {
    e.preventDEfault();
    if (evento.trim().length < 3) {
      setNotifyUser({
        titleNote: "Deu ruim!",
        textNote: `Necessario ao menos três caracteres`,
        imgIcon: "warning",
        imgAlt: "",
        showMessage: true,
      });
    } else
      try {
        setNotifyUser({
          titleNote: "Cadastrado!",
          textNote: `${evento} cadastrado com sucesso`,
          imgIcon: "sucess",
          imgAlt: "",
          showMessage: true,
        });
      } catch (error) {
        setNotifyUser({
          titleNote: "Deu ruim!",
          textNote: `Não foi possivel cadastrar ${evento}`,
          imgIcon: "danger",
          imgAlt: "",
          showMessage: true,
        });
      }
  }
  function showUpdateForm(params) {}

  function editActionAbort() {}

  function handleUpdate(e) {}

  function handleDelete() {}

  return (
    <>
      {/* <Notification {} setNotifyUser={} /> */}
      {/* {showSpinner ? <Spinner /> : null} */}
      <MainContent>
        <Container>
          <div className="cadastro-evento__box">
            <Titulo titleText="Eventos" />
            <ImageIllustrator imageRender={TipoEventoImage} />

            <form className="f-evento">
              <Input 
              id={"nomeEvento"}
              placeholder= {"Nome do Evento"}
              type = {"text"}
              name = {"nomeEvento"}
              required = {"required"}
              />

              <Input
              id={"descricao"}
              placeholder = {"Descrição"}
              type = {"text"}
              name = {"descricaoEvento"}
              required = {"required"}
              />

              <Input
              id = {"tipoEvento"}
              placeholder = {"Tipo de Evento"}
              type = {"text"}
              name = {"tipoEvento"}
              required = {"required"}
              />

              <Input
              id = {"dataEvento"}
              placeholder = {"dd/mm/aaaa"}
              type = {"date"}
              name = {"dataEvento"}
              required = {"required"}
              />

              <Button
              id = {"cadastrar"}
              name = {"Cadastrar"}
              type = {"submit"}
              onClick = {"handleSubmit "}
              textButton = {"Cadastrar"}

              />


              
            </form>
          </div>
        </Container>

        <section className="lista-eventos-section">
          <Container>
            <Titulo titleText={"Lista de Eventos"} color="white" />
            <TableEv
              dados={evento}
            
            />
          </Container>
        </section>
      </MainContent>
    </>
  );
};

export default EventosPage;