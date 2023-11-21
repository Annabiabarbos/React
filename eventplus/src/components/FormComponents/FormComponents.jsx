import React from 'react';
import './FormComponents.css';

export const Input = ({
    type,
    id, 
    value,
    required,
    additionalClass,
    name,
    placeholder,
    manipulationFunction
}) => {
    return (
       <input 
       type= {type}
       id={id}
       name={name} 
       value = {value}
       required = {required ? "requiered" : ""}
       placeholder = {placeholder}
       onChange = {manipulationFunction}
       className = {`input-component ${additionalClass}`}
       autoComplete = "off"
       />

    );
};

export const label = ({htmlFor , labelText}) => {
    return <label htmlFor={htmlFor}>{labelText} </label>
}

//componente criado na forma tradicional props ao invés do destructuring
export const Button = ( props ) => {
    return (
        <button
        id= {props.id}
        name = {props.name}
        type = {props.type}
        className = {` button-component ${props.additionalClass}`}
        onClick = {props.manipulationFunction}
        >
            {props.textButton}
        </button>
    );
}

/*options = [
    {value }
]; //veio do banco de dados pela api*/

export const Select = (
    requiered,
    id,
    name,
    options,
    manipulationFunction,
    additionalClass = "",
    defaultValue

) => {
    return(
        <select 
        name = {name} 
        id= {id}
        required = {requiered}
        className = {`input-component ${additionalClass}`}
        onChange = {manipulationFunction}
        value = {defaultValue}
        >
            <option value = "">Selecione</option>
            {options.map ((o) => {
                return (
                    <option key= {Math.random()} value={o.value}>{o.text}</option>
                );
            })}
        </select>
    )
}