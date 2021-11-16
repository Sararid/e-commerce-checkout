// Fichero src/components/App.js

import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api'; // Importamos el servicio que acabamos de crear
//import ls from '../services/localStorage';
import { Link, NavLink, Switch, useRouteMatch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

function App() {


  return (
    <>

      <div className='animation'> <span>hola</span></div>

      <h1 className="title">Hola mundo 2 + 20</h1>
      <h2>Este título aparece siempre</h2>


      <Route path="/contacto">
        <h2>Este título solo aparece cuando la usuaria entra en la página de contacto</h2>
      </Route>
      <h1></h1>      <nav>
        <ul>
          <li>
            <Link to="/">Ir al inicio</Link>
          </li>
          <li>
            <Link to="/contacto">Ir a contacto</Link>
          </li>
        </ul>
      </nav>

    </>
  );
}

export default App;