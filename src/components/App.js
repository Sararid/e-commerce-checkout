// Fichero src/components/App.js

import "../styles/App.scss";
import { useEffect, useState } from "react";
import { Link, NavLink, Switch, useRouteMatch, Route } from "react-router-dom";

//layout components
import Header from "./Header";
import Hero from "./Hero";
import Main from "./Main";
import Footer from "./Footer";
import FeauturedCollection from "./FeauturedCollection";
import FeaturedProdDetails from './FeaturedProdDetails';
import NotFound from "./pages/NotFound";
import Shop from './pages/Shop';
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Hero />
          <Main />
          <FeauturedCollection />
        </Route>  <Route path="/product/:productId">
          <FeaturedProdDetails />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
