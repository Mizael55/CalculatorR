import React from "react";
import '../styles/bottom_clear.css';

const BottonClear = (props) => (
    <div
        onClick={() => props.handlerClear()}
        className='boton-clear'>
        {props.children}
    </div>
);

export default BottonClear;