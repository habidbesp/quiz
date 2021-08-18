import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import GlobalState from './context/GlobalState';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import './scss/main.scss'

ReactDOM.render(
  <BrowserRouter>
    <GlobalState>
        <App />
    </GlobalState>
  </BrowserRouter>,
  document.getElementById('root')
);

