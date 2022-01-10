import React from 'react';
import ReactDOM from 'react-dom';
import Home from './CityDangersAlertHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeClient from './Pages/HomeClient'
import HomeAdmin from './Pages/HomeAdmin'
import { Title } from './Components/Title';
import { Cards } from './Components/Cards';

ReactDOM.render(
  <React.StrictMode>
    <Title />
    <Home />
    <HomeClient />
    {/* <Cards {cards:CardListItem}/> */}
    <HomeAdmin />
  </React.StrictMode>,
  document.getElementById('root')
);