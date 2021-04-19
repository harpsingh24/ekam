import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 

import './app/styles/ekam/style.scss';
import './app/styles/ekam/custom.scss';

import './app/scripts/ekam/main';

import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
   <App/>
  </React.StrictMode>  
  </BrowserRouter>,
  document.getElementById('root')
);

 
reportWebVitals();
