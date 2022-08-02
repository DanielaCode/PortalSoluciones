import React from 'react';
import Boton from '../components/Boton';
import Input from '../components/Input';

const LoginFormulario = () => {
    return (
      <div className="LoginFormulario">
        <p>Ingresa Usuario:</p>
        <Input />
        <p>Ingresa Contraseña:</p>
        <Input />
        <Boton />
      </div>
    );
};

export default LoginFormulario;