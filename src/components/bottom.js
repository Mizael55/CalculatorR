import React from 'react';
import '../styles/bottom.css';

function Bottom(props) {

    const isOperator = val => {
        return isNaN(val) && (val !== ".") && (val !== "=");
    }
    return (
        <div
            onClick={() => props.handleClick(props.children)}
            className={`bottom-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}>
            {props.children}
        </div>
    );
}

export default Bottom;