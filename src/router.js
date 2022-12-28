import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';


import Header from './components/header_footer/header';
import Footer from './components/header_footer/footer';
import Home from './components/home';
import SignIn from './components/signin';

const Routes = ({user}) => {

  return (
    <BrowserRouter>
      <Header user={user}/>
      <Switch>
        <Route path="/sign_in" exact component={SignIn}/>
        <Route path="/" exact component={Home}/>
      </Switch>
      <ToastContainer/>
      <Footer/>
    </BrowserRouter>
  );
  
}

export default Routes;