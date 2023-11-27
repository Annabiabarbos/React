// Importando módulos e componentes necessários do React e do projeto
import React, { Fragment, useEffect, useState } from "react";
import "./TiposEventoPage.css";
import Titulo from "../../components/Titulo/Titulo";
import MainContent from "../../components/MainContent/MainContent";
import Container from "../../components/Container/Container";
import ImageIllustrator from "../../components/ImageIllustrator/ImageIllustrator";
import TableTp from "./TableTP/TableTp";
import Notification from "../../components/Notification/Notification";
import TipoEventoImage from "../../assets/images/tipo-evento.svg";
import { Input, Button,} from "../../components/FormComponents/FormComponents.jsx";
import api, { eventsTypeResource } from "../../Services/Services";
import Spinner from "../../components/Spinner/Spinner";
//import { logDOM } from "@testing-library/react";

// Definindo estados usando o Hook useState do React
const TiposEventoPage = () => {
  const [frmEdit, setFrmEdit] = useState(false); //está em modo edição?
  const [titulo, setTitulo] = useState("");
  const [idEvento, setIdEvento] = useState(null);
  const [tiposEvento, setTiposEvento] = useState([]);
  const [notifyUser, setNotifyUser] = useState();
  const [showSpinner, setShowSpinner] = useState(false);

  // useEffect é usado para lidar com efeitos colaterais, como chamadas de API, após a renderização do componente
  useEffect(() => {
    async function loadEventsType() {
      setShowSpinner(true);
      try {
        const retorno = await api.get(eventsTypeResource);
        setTiposEvento(retorno.data);
        console.log(retorno.data);
      } catch (error) {
        console.log("Erro na api");
        console.log(error);
      }
      setShowSpinner(false);
    }
    loadEventsType();
  }, []); // O array vazio como segundo argumento significa que esse efeito será executado apenas uma vez após a montagem do componente.

  // Função para lidar com o envio do formulário de cadastro ou edição
  async function handleSubmit(e) {
    e.preventDefault(); //evita o submit do formulario
    if (titulo.trim().length < 3) {
       // Validação básica do título
      setNotifyUser({
        titleNote: "Deu ruim!",
        textNote: `Necessario ao menos três caracteres`,
        imgIcon: "warning",
        imgAlt: "",
        showMessage: true,
      });
    } else
      try {
         // Chamada para a API para cadastrar um novo tipo de evento
        const retorno = await api.post(eventsTypeResource, {
          titulo: titulo
        });

        setTitulo(""); //Limpa o campo de título após o cadastro

        const buscaEventos = await api.get(eventsTypeResource);

        setTiposEvento(buscaEventos.data);

        setNotifyUser({
          titleNote: "Sucesso",
          textNote: `${titulo} cadastrado com sucesso`,
          imgIcon: "success",
          imgAlt:
            "Icone de ilustração de sucesso. Moça segurando um balão com simbolo de confirmação ok",
          showMessage: true,
        });
      } catch (error) { // Em caso de erro na chamada da API
        setNotifyUser({
          titleNote: "Deu ruim",
          textNote: `Não foi possivel cadastrar ${titulo}`,
          imgIcon: "danger",
          imgAlt: "",
          showMessage: true,
        });
      }
  }
  /********************* EDITAR CADASTRO *********************/
  // mostra o formulário de edição
  async function showUpdateForm(idElement) {
    setFrmEdit(true);
    setIdEvento(idElement);
    try {
      const retorno = await api.get(`${eventsTypeResource}/${idElement} `);
      setTitulo(retorno.data.titulo);
      console.log(retorno.data.titulo);
    } catch (error) {}
  }
  // cancela a tela/ação de edição (volta para o form de cadastro)
  
  function editActionAbort() {
    setFrmEdit(false);
    setTitulo("");
    setIdEvento(null);
  }
  // cadastrar a atualização na api
  async function handleUpdate(e) {
    e.preventDefault();

    try {
      //atualizar na api
      const retorno = await api.put(eventsTypeResource + "/" + idEvento, {
        titulo: titulo,
      });

      if (retorno.status === 204) {
        //reseta o state
        /*setTitulo("")
        setIdEvento (null)*/

        //notificar o usuario
        setNotifyUser({
          titleNote: "Atualizado",
          textNote: `${titulo} foi atualizado com sucesso`,
          imgIcon: "success",
          imgAlt:
            "Icone de ilustração de sucesso. Moça segurando um balão com simbolo de confirmação ok",
          showMessage: true,
        });

        //Atualizar os dados na tela
        const retorno = await api.get(eventsTypeResource);
        setTiposEvento(retorno.data);

        //Voltar pra tela de cadasro
        editActionAbort();
      }
    } catch (error) {
      setNotifyUser({
        titleNote: "Deu ruim!",
        textNote: `Não foi possivel atualizar ${titulo}`,
        imgIcon: "danger",
        imgAlt: "",
        showMessage: true,
      });
    }
  }
  /********************* APAGAR DADOS *********************/
  // apaga o tipo de evento na api
  async function handleDelete(idElement) {
    if (window.confirm("Deseja mesmo deletar?")) {
      try {
        const promise = await api.delete(`${eventsTypeResource}/${idElement} `);

        if (promise.status === 204) {
          setNotifyUser({
            titleNote: "Deletado",
            textNote: `Elemento deletado`,
            imgIcon: "danger",
            imgAlt: "Homem segurando um botao com o simbolo X",
            showMessage: true,
          });

          const buscaEventos = await api.get(eventsTypeResource);

          setTiposEvento(buscaEventos.data); //zera a lista de tipos de evento
        }
      } catch (error) {
        alert("Houve algum problema pra apagar, desculpe pelo ocorrido");
      }
    }
  }

  /*function theMagic() {
    setNotifyUser({
      titleNote: "Sucess",
      textNote: `Evento cadastrado com sucesso`,
      imgIcon: "success",
      imgAlt:
        "Icone de ilustracao de sucesso. Moça segurando um balão com simbolo de confirmação ok",
      showMessage: true,
    });
  }*/

  return (
    <>
      <Notification {...notifyUser} setNotifyUser={setNotifyUser} />
      {/*SPINNER - Feito com position*/}
      {showSpinner ? <Spinner /> : null}
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
                      id={"Título"}
                      placeholder={"Título"}
                      name={"titulo"}
                      type={"text"}
                      required={"required"}
                      value={titulo}
                      manipulationFunction={(e) => {
                        setTitulo(e.target.value);
                      }}
                    />

                    {/*<span>{idEvento}</span>*/}
                    <Button
                      textButton="Cadastrar"
                      id="cadastrar"
                      name="cadastrar"
                      type="button"
                      manipulationFunction={handleSubmit}
                    />
                  </>
                ) : (
                  //Editar
                  <>
                    <Input
                      id={"Título"}
                      placeholder={"Título"}
                      name={"titulo"}
                      type={"text"}
                      required={"required"}
                      value={titulo}
                      manipulationFunction={(e) => {
                        setTitulo(e.target.value);
                      }}
                    />
                    {/*<span>{idEvento}</span>*/}
                    <div className="buttons-editbox">
                      <Button
                        textButton="Atualizar"
                        id="atualizar"
                        name="atualizar"
                        type="submit"
                        manipulationFunction={handleUpdate}
                        additionalClass="button-component--midle"
                      />
                      <Button
                        textButton="Cancelar"
                        id="cancelar"
                        name="cancelar"
                        type="button"
                        manipulationFunction={editActionAbort}
                        additionalClass="button-component--midle"
                      />
                    </div>
                  </>
                )}
              </form>
            </div>
          </Container>
        </section>

        {/* Listagem de tipo de eventos */}
        <section className="lista-eventos-section">
          <Container>
            <Titulo titleText={"Lista Tipo de Eventos"} color="white" />

             {/* Componente de tabela para exibir os tipos de eventos */}
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
