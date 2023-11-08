import React from 'react';
import Titulo from "../Titulo/Titulo";

import './VisionSection.css';

const VisionSection = () => {
    return (
        <section className='vision'>
        <div className='vision__box'>
            <Titulo titleText={"Visao"} color = 'white' className = "vision__title"/>
               
            
            <p className='vision__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quasi itaque, eum praesentium quos expedita alias voluptates aliquid numquam modi ea voluptatem libero, aperiam culpa tenetur vero facilis cupiditate voluptate labore?</p>
        </div>
        </section>
    );
};

export default VisionSection;