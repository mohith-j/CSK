import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './router';
import './Resources/css/app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
