import "../styles/App.scss";
import { Switch, Route } from "react-router-dom";
import Header from "./layout/Header";
import Hero from "./layout/Hero";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import FeauturedCollection from "./products/FeauturedCollection";
import FeaturedProdDetails from './products/FeaturedProdDetails';
import NotFound from "./layout/NotFound";
import Shop from './cart/Shop';
import Cart from "./cart/Cart";
import Checkout from "./checkout/Checkout";
import ProcessedPayment from "./checkout/ProcessedPayment";

function App() {
  return (
    <>

      <Header />
      <Switch>
        <Route path="/" exact>
          <Hero />
          <Main />
          <FeauturedCollection />
        </Route>
        <Route path="/product/:productId">
          <FeaturedProdDetails />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/payment-success">
          <ProcessedPayment />
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
