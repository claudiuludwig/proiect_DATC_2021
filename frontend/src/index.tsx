import React from 'react';
import ReactDOM from 'react-dom';
import Home from './CityDangersAlertHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import HomeClient from './Pages/HomeClient'
import HomeAdmin from './Pages/HomeAdmin'
import { Title } from './Components/Title';

ReactDOM.render(
  <React.StrictMode>
    <Title />
    <Home />
    <Login /> needs hooks for being visible
    <SignUp />
    <HomeClient />
    <HomeAdmin />
  </React.StrictMode>,
  document.getElementById('root')
);