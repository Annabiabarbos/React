import React, { useEffect, useState } from "react";
import "./HomePage.css";

import Banner from "../../components/Banner/Banner";
import MainContent from "../../components/MainContent/MainContent";
import VisionSection from "../../components/VisionSection/VisionSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import Titulo from "../../components/Titulo/Titulo"
import NextEvent from "../../components/NextEvent/NextEvent";
import Container from "../../components/Container/Container";
import { nextEventResource } from "../../Services/Services";

import api from "../../Services/Services";

const HomePage = () => {
  const [nextEvents, setNextEvents] = useState([]);

  // roda somente na inicialização do componente
  useEffect(()=> {
      async function getNextEvents() {
          try {
              const promise = await api.get(`${nextEventResource}`);
              const dados = await promise.data;
              // console.log(dados);
              setNextEvents(dados);//atualiza o state
          } catch (error) {
            alert("Deu ruim na api!")
          }
      }
     
      getNextEvents();//chama a função

  },[]);

  return (
    <MainContent>
      <Banner />

      {/* PRÓXIMOS EVENTOS */}
      <section className="proximos-eventos">
        <Container>
          <Titulo titleText={"Próximos Eventos"} />

          <div className="events-box">
            {
              nextEvents.map((e) => {
                return (
                  <NextEvent
                  title={e.nomeEvento}
                  description={e.descricao}
                  eventDate={e.dataEvento}
                  idEvent={e.idEvento}
                />
                );
              })
            }
          </div>
        </Container>
      </section>

      <VisionSection />
      <ContactSection />
    </MainContent>
  );
};

export default HomePage;