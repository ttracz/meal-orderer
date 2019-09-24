import {ADD_QUANTITY, ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY} from './action-types/cart-actions'

export const addToCart = (id) => {

    return {
        type: ADD_TO_CART,
        id
    }

}

export const removeFromCart = (id) => {

    return {
        type: REMOVE_ITEM,
        id
    }

}

export const addQuantity = (id) => {

    return {
        type: ADD_QUANTITY,
        id
    }

}

export const removeQuantity = (id) => {

    return {
        type: SUB_QUANTITY,
        id
    }

}
