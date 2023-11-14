import React, { useEffect, useState } from "react";
import "./TiposEventoPage.css";
import Titulo from "../../components/Titulo/Titulo";
import ImageIllustrator from "../../components/ImageIllustrator/ImageIllustrator";
import MainContent from "../../components/MainContent/MainContent";
import Container from "../../components/Container/Container";
import TipoEventoImage from "../../assets/images/tipo-evento.svg";
import { Input, Button } from "../../components/FormComponents/FormComponents";
import api, { eventsTypeResource } from "../../Services/Services";
import TableTp from './TableTP/TableTp'
import { Await } from "react-router-dom";

const TiposEventoPage = () => {
  const [frmEdit, setFrmEdit] = useState(false); //está em modo edição?
  const [titulo, setTitulo] = useState("");
  const [tiposEvento, setTiposEventos] = useState([]);

  useEffect(() => {
    async function loadEventsType()
    try {
        const retorno = Await api.get (eventsTypeResource)
        setTiposEventos (retorno.data)
    } catch (error) {
        console.log("Erro na api");
        console.log(error);
    }
    loadEventsType();
  }, []);
  

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

  function handleUpdate() {
    alert("Bora atualizar");
  }

  function editActionAbort(){
    alert('Cancelar a tela de edição de dados')
  }
  function showUpdateForm(){
    alert ('Vamos mostrar o formulario da edição')
  }

  function handleDelete (idElement){
    alert(`vamos apagar o evento de id : ${idElement}`)
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
                    (<p>Tela de Cadastro</p>)
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

        <section className="lista-eventos-section">
          <Container>
            <Titulo titleText={"Lista Tipo de Eventos"} color="white" />

            <TableTp
            dados = {tiposEvento}
            fnUpdate = {showUpdateForm}
            fnDelete = {handleDelete}
            />
          </Container>
        </section>
      </MainContent>
    </>
  );
};

export default TiposEventoPage;
