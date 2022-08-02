import React from 'react';
import Layout from '../containers/Layout';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import  "../styles/Global.css";

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          {/* <Route exact path="/" element={<Login/>} />
                    <Route exact path="/welcome" element={<Welcome/>} /> */}
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default App;