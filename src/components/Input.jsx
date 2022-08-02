import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/Input.css";

const Input = () => {
    return (
        <div className='contenedor-input'>
            <input className="entrada" type="text" placeholder="usuario"/>
        </div>
    );
};

export default Input;