// Fichero src/components/App.js

import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Link, NavLink, Switch, useRouteMatch, Route } from 'react-router-dom';

//layout components 
import Header from './Header';
import Hero from './Hero';
import Main from './Main';
import Footer from './Footer';
import FeauturedCollection from './FeauturedCollection';
function App() {


  return (
    <>

      <Header />

      <Hero />

      <Main />

      <FeauturedCollection />
      <Footer />
    </>
  );
}

export default App;