import { ActionTypes } from "../constants/actionTypes";


export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}


export const selectedProducts = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products,
    }
}


export const removeSelectedProducts = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,

    }
}

export const addToCart = (itemId) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: {
            id: itemId
        }
    }
}


export const removeFromCart = (itemId) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemId
        }
    }
}


export const adjustQty = (itemId, value) => {
    return {
        type: ActionTypes.ADJUST_QTY,
        payload: {
            id: itemId,
            qty: value,
        }
    }
}

export const loadCurrentItem = (item) => {
    return {
        type: ActionTypes.LOAD_CURRENT_ITEM,
        payload: item
    }
}