import React from "react";
import '../styles/button_clear.css';

const ButtonClear = (props) => (
    <div
        onClick={() => props.handlerClear()}
        className='boton-clear'>
        {props.children}
    </div>
);

export default ButtonClear;