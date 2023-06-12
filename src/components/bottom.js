import React from 'react';
import '../styles/bottom.css';

function Bottom(props) {

    const isOperator = val => {
        return isNaN(val) && (val !== ".") && (val !== "=");
    }
    return (
        <div
            onClick={() => props.handleClick(props.children)}
            className={`boton-contenedor ${isOperator(props.children) ? 'operador' : ''}`.trimEnd()}>
            {props.children}
        </div>
    );
}

export default Bottom;