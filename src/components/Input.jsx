import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/Input.css";

const Input = () => {
    return (
      <div className="Input">
        <input className="Input-item" type="text" placeholder="usuario" />
      </div>
    );
};

export default Input;