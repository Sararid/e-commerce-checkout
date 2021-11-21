// Fichero src/index.js (código nuevo)

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsContextProvider from './context/products-context';
import CartContextProvider from './context/cart-context';

const stripePromise = loadStripe('pk_test_51JskXOJ3Agh4GQYN9xdNONvoM2tuMlL5PMSUbgii5SjbDE5uDFRKyvmJe59PoKvxKQ561zd5uHG3c2Oa8YClRFN100g0O4GUJV');
ReactDOM.render(

    <HashRouter>
        <ProductsContextProvider>
            <CartContextProvider>
                <Elements stripe={stripePromise}>
                    <App />
                </Elements>
            </CartContextProvider>
        </ProductsContextProvider>
    </HashRouter>,
    document.getElementById('root')
);