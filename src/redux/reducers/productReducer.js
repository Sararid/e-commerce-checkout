import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    products: [], //it contains an objecto that would look like this  {id, title, desc, price, imag}
    cart: [], //the same but with quantity
    currentItem: null,
};
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };

        default:
            return state;
    }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};

        default:
            return state;
    }
};

export const shopReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            //get the item data from the product array
            const item = state.products.find((prod) => prod.id === payload.id);
            //check if the item is already in the cart,
            const inCart = state.cart.find((item) =>
                item.id === payload.id ? true : false
            );
            return {
                ...state, //we spread the state
                //if inCart is true or false, if it is tru , it will first tkae the first argument, whioch is map throught the objkect
                // cart  to find that specific id and then changes its qty else if not in the cart add it to cart object 
                cart: inCart
                    ? state.cart.map((item) =>
                        item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
                    )
                    : [...state.cart, { ...item, qty: 1 }],
            };
        case ActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                //this wil return everything except the one we want to delete 
                cart: state.cart.filter(item => item.id !== payload.id)
            };
        case ActionTypes.ADJUST_QTY:
            return {
                //we spread again the state, map cart and we will look for that specific item in the cart, and if the item is in the cart, we then adjsut the qty 
                ...state,
                cart: state.cart.map(item.id === payload.id ? { ...item, qty: payload.qty } : item)
            };
        case ActionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: payload
            };

        default:
            return state;
    }
};
