import React, { useState } from 'react';

const Input = ({type, placeholder, name, id ,value}) => {
    const [n1 , setn1] = useState();
    return (
        <><input 
        type = {type}
        placeholder= {placeholder}
        name= {name}
        id= {id}
        value = {value}
        onChange ={(e) => { 
            setn1 (e.target.value)
         }}
        />
        <span>{value}</span>
        </>
    );
};

export default Input;