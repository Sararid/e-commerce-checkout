// Fichero src/index.js (código nuevo)

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsContextProvider from './context/products-context';
import CartContextProvider from './context/cart-context';

ReactDOM.render(

    <HashRouter>
        <ProductsContextProvider>
            <CartContextProvider>

                <App />

            </CartContextProvider>
        </ProductsContextProvider>
    </HashRouter>,
    document.getElementById('root')
);