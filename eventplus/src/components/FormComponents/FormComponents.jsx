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
       manipulationFunction = {manipulationFunction}
       className = {`input-component ${additionalClass}`}
       autoComplete = "off"
       />

    );
};

export const label = () => {
    return <label htmlFor={htmlFor}>{labelText} </label>
}

//componente criado na forma tradicional props ao invés do destructuring
export const button = ( props ) => {
    return (
        <button
        id= {props.id}
        name = {props.name}
        type = {props.type}
        className = {props.additionalClass}
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
            <option value = "">Tipo Evento</option>
            {options.map ((o) => {
                return (
                    <option key= {Math.random()} value={o.value}>{o.text}</option>
                );
            })}
        </select>
    )
}