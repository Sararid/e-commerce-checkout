//combine all the reducers here

import { combineReducers } from 'redux';

import { productReducer, selectedProductReducer, shopReducer } from './productReducer';

const reducers = combineReducers({
    allProducts: productReducer,
    products: selectedProductReducer,
    cartShop: shopReducer,
})

export default reducers;