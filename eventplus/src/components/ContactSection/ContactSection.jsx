import React from 'react';
import './ContactSection.css'
import contatoMap from "../../assets/images/contato-map.png"
import Titulo from '../Titulo/Titulo';

const ContactSection = () => {
    return (
        <section className='contato'>
            <Titulo titleText = {"Contato"}/>

            <div className='contato__endereco-box'>
                <img 
                src={contatoMap} 
                alt="imagem ilustrativa de um mapa" 
                className='contato__img-map'
                />
                <p>
                    Rua Niterói, 180 - Centro <br/>
                    São Caetano do Sul - SP
                    <a href='tel: +55114225200' className='contato__telefone'>
                        (11) 4225-2000

                    </a>
                </p>
            </div>

            
        </section>
    );
};

export default ContactSection;