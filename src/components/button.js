import React from 'react';
import '../styles/button.css';

function Button({handleClick, ...props}) {

    const isOperator = val => {
        return isNaN(val) && (val !== ".") && (val !== "=") ;
    }
    return (
        <div
            onClick={() => handleClick(props.children)}
            className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}>
            {props.children}
        </div>
    );
}

export default Button;