import React from 'react';
import './HomePage.css';
import Banner from '../../components/Banner/Banner';
import MainContent from '../../components/MainContent/MainContent';
import VisionSection from '../../components/VisionSection/VisionSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import Titulo from '../../components/Titulo/Titulo';
import NextEvent from '../../components/NextEvent/NextEvent';
import Container from '../../components/Container/Container';

const HomePage = () => {
    return (
        
            <MainContent>
                <Banner/>
                <section className='proximos-eventos'>
                    <Container>
                    <Titulo titleText={"Proximos Eventos"}/>
                   
                    

                    <div className='events-box'>
                        <NextEvent 
                        title = {"Evento de JS"}
                        description = {"Evento legal"}
                        eventDate = {"08/11/23"}
                        idEvent = {"bahcvsd"}

                        />
                        <NextEvent/>
                        <NextEvent/>

                    </div>
                    </Container>
                </section>
                
                <VisionSection/>
                <ContactSection/>
            </MainContent>
        
    );
};

export default HomePage;