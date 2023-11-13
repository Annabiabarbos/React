import React from 'react';
import './ImageIlustrator.css'
import imageDefault from '../../assets/images/default-image.jpeg'


const ImageIllustrator = ({altText, imageRender = imageDefault, additionalClass = ""}) => {

    return (
        <figure className='illustrator-box'>
            <img 
            src={imageRender} 
            alt={altText} 
            className = {`illustrator-box-image ${additionalClass}`}
            />
        </figure>
    );
};

export default ImageIllustrator;