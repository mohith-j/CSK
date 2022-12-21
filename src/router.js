import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Header from './components/header_footer/header';
import Footer from './components/header_footer/footer';
import Home from './components/home';
import SignIn from './components/signin';

const Routes = () => {

  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/sign_in" exact component={SignIn}/>
        <Route path="/" exact component={Home}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
  
}

export default Routes;