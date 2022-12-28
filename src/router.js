import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';


import Header from './components/header_footer/header';
import Footer from './components/header_footer/footer';
import Home from './components/home';
import SignIn from './components/signin';
import Dashboard from './components/admin/dashboard';
import AuthGuard from './hoc/auth';

const Routes = ({user}) => {

  return (
    <BrowserRouter>
      <Header user={user}/>
      <Switch>
        <Route path="/dashboard" exact component={AuthGuard(Dashboard)}/>
        <Route path="/sign_in" exact component={ 
          props => (<SignIn {...props} user={user}/>) 
        }/>
        <Route path="/" exact component={Home}/>
      </Switch>
      <ToastContainer/>
      <Footer/>
    </BrowserRouter>
  );
  
}

export default Routes;