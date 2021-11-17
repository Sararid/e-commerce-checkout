//combine all the reducers here

import { combineReducers } from 'redux';

import { productReducer, selectedProductReducer } from './productReducer';

const reducers = combineReducers({
    allProducts: productReducer,
    products: selectedProductReducer,
})

export default reducers;