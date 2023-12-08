import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Title from "../../components/Title/Title";
import Table from "./TableEvA/TableEvA";
import Container from "../../components/Container/Container";
import { Select } from "../../components/FormComponents/FormComponents";
import Spinner from "../../components/Spinner/Spinner";
import Modal from "../../components/Modal/Modal";
import api, { eventsResource, MyeventsResource } from "../../Services/Service";
import Toggle from "../../components/Toggle/Toggle";
import "./EventosAlunoPage.css";
import { UserContext } from "../../context/AuthContext";

const EventosAlunoPage = () => {
  // state do menu mobile
  const [eventos, setEventos] = useState([]);

  // select mocado
  const [quaisEventos, setQuaisEventos] = useState([
    { value: 1, text: "Todos os eventos" },
    { value: 2, text: "Meus eventos" },
  ]);

  const [tipoEvento, setTipoEvento] = useState("1"); //código do tipo do Evento escolhido
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModal, setShowModal] = useState();

  // recupera os dados globais do usuário
  const { userData } = useContext(UserContext);

  useEffect(() => {
    async function loadEventsType() {
      setShowSpinner(true);
      //setEventos([]);
      if (tipoEvento === "1") {
        //chamar a api com todos os eventos
        try {
          //listar os eventos (Eventos)
          const todosEventos = await api.get(eventsResource);
          //setEventos(retornoEventos.data);
          const meusEventos = await api.get(
            `${MyeventsResource}/${userData.userId}`
          );

          const eventosMarcados = verificaPresenca (todosEventos.data, meusEventos)
          setEventos = (eventosMarcados)

          console.clear()  //limpa o console

          console.log("Todos os Eventos");
          console.log(todosEventos.data);


          console.log("Meus Eventos");
          console.log(meusEventos.data);

          console.log("Eventos Marcados");
          console.log(eventosMarcados.data);

        } catch (error) {
          console.log("Erro na api");
          console.log(error);
        }
      } else if (tipoEvento === "2") {
        //chamar a api dos meus eventos

        try {
          const retornoEventos = await api.get(
            `${MyeventsResource}/${userData.userId}`
          );
          console.clear()
          console.log("Minhas presenças");
          // console.log(retornoEventos.data);

          const arrEventos = []; //array vazia

          retornoEventos.data.forEach((e) => {
            arrEventos.push(e.evento);
          });

          //  console.log(arrEventos);
          setEventos(arrEventos);
        } catch (error) {
          console.log("Erro na api");
          // console.log(error);
        }
      } else {
        setEventos([]);
      }

      setShowSpinner(false);
    }

    loadEventsType();
  }, [tipoEvento]);

  const verificaPresenca = (arrAllEvents, eventsUser) => {
    for (let  x = 0; x < arrAllEvents.length; x++) { //para cada evento principal 
      for (let i = 0; i < eventsUser.length; i ++) { //procurar a correspondência em minhas presenças
        if (arrAllEvents [x]. idEvento === eventsUser [i].idEvento){
          arrAllEvents[x]. situacao = true; //para de procurar para o evento 
          break; 
       }
      }
    }

    return arrAllEvents; //retorna os eventos marcados
  }

  // toggle meus eventos ou todos os eventos
  function myEvents(tpEvent) {
    setTipoEvento(tpEvent);
  }

  async function loadMyComentary(idComentary) {
    return "????";
  }

  const showHideModal = () => {
    setShowModal(showModal ? false : true);
  };

  const commentaryRemove = () => {
    alert("Remover o comentário");
  };

  function handleConnect() {
    alert("Desenvolver a função conectar evento");
  }
  return (
    <>
      {/* <Header exibeNavbar={exibeNavbar} setExibeNavbar={setExibeNavbar} /> */}

      <MainContent>
        <Container>
          <Title titleText={"Eventos"} className="custom-title" />

          <Select
            id="id-tipo-evento"
            name="tipo-evento"
            required={true}
            options={quaisEventos} // aqui o array dos tipos
            manipulationFunction={(e) => myEvents(e.target.value)} // aqui só a variável state
            defaultValue={tipoEvento}
            additionalClass="select-tp-evento"
          />
          <Table
            dados={eventos}
            fnConnect={handleConnect}
            fnShowModal={() => {
              showHideModal(); //Inverte o valor de true pra false
            }}
          />
        </Container>
      </MainContent>

      {/* SPINNER -Feito com position */}
      {showSpinner ? <Spinner /> : null}

      {showModal ? (
        <Modal
          userId={userData.userId}
          showHideModal={showHideModal}
          fnDelete={commentaryRemove}
        />
      ) : null}
    </>
  );
};
export default EventosAlunoPage;
