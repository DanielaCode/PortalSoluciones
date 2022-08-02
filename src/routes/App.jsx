import React from 'react';
import Layout from '../containers/Layout';
import  "../styles/Global.css";
import Boton from '../components/Boton';
import Input from '../components/Input';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Routes>
            <Layout>
                {/* <Route exact path="/" element={<Login/>} />
                <Route exact path="/welcome" element={<Welcome/>} /> */}
            </Layout>
        </Routes>   
    );
};

export default App;