import React, { Fragment, useEffect, useState } from "react";
import "./TiposEventoPage.css";
import Titulo from "../../components/Titulo/Titulo";
import MainContent from "../../components/MainContent/MainContent";
import Container from "../../components/Container/Container";
import ImageIllustrator from "../../components/ImageIllustrator/ImageIllustrator";
import TableTp from "./TableTP/TableTp";

import TipoEventoImage from "../../assets/images/tipo-evento.svg";
import {
  Input,
  Button,
} from "../../components/FormComponents/FormComponents.jsx";
import api, { eventsTypeResource } from "../../Services/Services";

const TiposEventoPage = () => {
  const [frmEdit, setFrmEdit] = useState(false); //está em modo edição?
  const [titulo, setTitulo] = useState("");
  const [tiposEvento, setTiposEventos] = useState([]);

  useEffect(() => {
    async function loadEventsType() {
      try {
        const retorno = await api.get(eventsTypeResource);
        setTiposEventos(retorno.data);
        console.log(retorno.data);
      } catch (error) {
        console.log("Erro na api");
        console.log(error);
      }
    }
    loadEventsType();
  }, [tiposEvento]);


  async function handleSubmit(e) {
    e.preventDefault(); //evita o submit do formulario
    if (titulo.trim().length <= 3) {
      alert("O título deve ter pelo menos 3 caracteres");
    }

    try {
      const retorno = await api.post(eventsTypeResource, {
        titulo: titulo,
      });

      setTitulo("");

      alert("Cadastrado com sucesso");
    } catch (error) {
      alert("Deu ruim no submit");
    }
  }

  /********************* EDITAR CADASTRO *********************/
  // mostra o formulário de edição
  function showUpdateForm() {
    alert("Vamos mostrar o formulário de edição");
  }
  // cancela a tela/ação de edição (volta para o form de cadastro)
  function editActionAbort() {
    alert("Cancelar a tela de edição de dados");
  }
  // cadastrar a atualização na api
  function handleUpdate() {
    alert("Bora Editar");
  }

  /********************* APAGAR DADOS *********************/
  // apaga o tipo de evento na api
   async function handleDelete(idElement) {

    
    if ( window.confirm("Deseja mesmo deletar ?")){
      try {
        const promise = await api.delete(`${eventsTypeResource}/${idElement} `);
   
   
   
        alert(`Vamos apagar o evento de id: ${idElement}`);
   
        if (promise.status == 204){
         alert ('O item foi deletado')
         //setTiposEventos ([]); zera a lista de tipos de evento 
   
        }} catch (error) {
         alert('Houve algum problema pra apagar, desculpe pelo ocorrido')
       }
     }
    }

  return (
    <>
      {/*Formulario de cadastro de tipos de evntos*/}
      <MainContent>
        {/*Listagem de tipos de evntos*/}
        <section className="cadastro-evento-section">
          <Container>
            <div className="cadastro-evento__box">
              <Titulo titleText="Tipos de Evento" />

              <ImageIllustrator imageRender={TipoEventoImage} />

              <form
                className="ftipo-evento"
                onSubmit={frmEdit ? handleUpdate : handleSubmit}
              >
                {/* Cadastrar ou Editar */}
                {!frmEdit ? (
                  //Cadastrar
                  <>
                    <Input
                      id="Título"
                      placeholder="Título"
                      name={"titulo"}
                      type={"text"}
                      required={"required"}
                      value={titulo}
                      manipulationFunction={(e) => {
                        setTitulo(e.target.value);
                      }}
                    />
                    {/*<span>{titulo}</span>*/}
                    <Button
                      textButton="Cadastrar"
                      id="cadastrar"
                      name="cadastrar"
                      type="submit"
                    />
                  </>
                ) : (
                  //Editar
                  <p>Tela de Edição</p>
                )}
              </form>
            </div>
          </Container>
        </section>

        {/* Listagem de tipo de eventos */}
        <section className="lista-eventos-section">
          <Container>
            <Titulo titleText={"Lista Tipo de Eventos"} color="white" />

            <TableTp
              dados={tiposEvento}
              fnUpdate={showUpdateForm}
              fnDelete={handleDelete}
            />
          </Container>
        </section>
      </MainContent>
    </>
  );
};

export default TiposEventoPage;
