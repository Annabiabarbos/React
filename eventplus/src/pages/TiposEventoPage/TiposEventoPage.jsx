import React from 'react';
import './TiposEventoPage.css'
import Titulo from '../../components/Titulo/Titulo';
import MainContent from '../../components/MainContent/MainContent';
import Container from '../../components/Container/Container';



const TiposEventoPage = () => {
    return (
        <>
        <MainContent>
            <section className='cadastro-evento-section'> 
            <Container>
                <div className='cadastro-evento-box'>
                    
                    <title titleText = {"Cadastro Tipos de Evento"}/>
                    
                    <ImageIllustrador />
                    
                    <form className='ftipo-evento'>
                        <p>Formulario sera criado aqui</p>
                    </form>

                </div>
            </Container>

            </section>
        
        <div>
            <h1>Tipos de Evento</h1>
        </div>
        </MainContent>
        </>
    );
};

export default TiposEventoPage;