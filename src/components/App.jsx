import React from 'react';
import Layout from '../containers/Layout';
import  "../styles/Global.css";
import Boton from './Boton';
import Input from './Input';

const App = () => {
    return (
        <Layout>
            <h1>hola mundo</h1>
            <Boton/>
            <Input/>
        </Layout>
    );
};

export default App;