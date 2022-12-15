import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/header_footer/header';
import Footer from './components/header_footer/footer';
import Home from './components/home';


const Router=()=> {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" exact component={Home}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default Router;
