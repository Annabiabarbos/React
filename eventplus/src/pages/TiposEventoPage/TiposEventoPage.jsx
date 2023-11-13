import React, { useState } from 'react';
import './TiposEventoPage.css'
import Titulo from '../../components/Titulo/Titulo';

import ImageIllustrator from '../../components/ImageIllustrator/ImageIllustrator';

import MainContent from '../../components/MainContent/MainContent';
import Container from '../../components/Container/Container';


import TipoEventoImage from "../../assets/images/tipo-evento.svg"

const TiposEventoPage = () => {
    const [frmEdit , setFrmEdit] = useState (false); //está em modo edição?

    function handleSubmit() {
        alert ('Bora cadastrar')
    }

    function handleUpdate() {
        alert ('bora atualizar')
    }
    return (
        <>
        <MainContent>
            <section className='cadastro-evento-section'> 
            <Container>
                <div className='cadastro-evento__box'>
                    
                    
                    <Titulo titleText="Tipos de Evento"/>
                    
                    <ImageIllustrator 
                    imageRender = {TipoEventoImage}
                    /> 
                    
                    <form 
                        className='ftipo-evento'
                        onSubmit={frmEdit ? handleUpdate : handleSubmit}
                        >
                            {
                                !frmEdit ? (<p>Tela de cadastro</p>): (<p>Tela de Edição</p>)
                            }
                        
                    </form>

                </div>
            </Container>

            </section>
        
        </MainContent>
        </>
    );
};

export default TiposEventoPage;