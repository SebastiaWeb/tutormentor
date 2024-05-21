import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './forms/login/Login'
import './index.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import SingUp from './forms/singup/SingUp';
import Header from './common/Header';
import Footer from './common/Footer';
import Cards from './common/Cards/Cards';
import Dashboards from './Dashboard';
import Profesor from './Profesor';
import Encuesta from './Encuesta';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
