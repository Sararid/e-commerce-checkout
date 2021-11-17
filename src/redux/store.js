import { createStore } from "redux";
import reducers from './reducers/main.js';


const store = createStore(reducers, {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //takes 2 arg, first reducers and a state

export default store;