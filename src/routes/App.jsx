import React from 'react';
import Layout from '../containers/Layout';
import  "../styles/Global.css";
import Boton from '../components/Boton';
import Input from '../components/Input';

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